import os
import google.generativeai as genai
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager

from database import products_collection, init_db, leads_collection, users_collection
from crm import save_lead_to_crm

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")
if GEMINI_API_KEY:
    genai.configure(api_key=GEMINI_API_KEY)

@asynccontextmanager
async def lifespan(app: FastAPI):
    print("Initializing Database...")
    await init_db()
    yield
    print("Shutting down DB connection...")

app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

class LeadRequest(BaseModel):
    name: str
    email: str
    phone: str
    intent: str

class AuthRequest(BaseModel):
    username: str
    password: str

class ChangePasswordRequest(BaseModel):
    username: str
    old_password: str
    new_password: str

@app.get("/api/products")
async def get_products():
    products = []
    try:
        cursor = products_collection.find({})
        async for document in cursor:
            document["_id"] = str(document["_id"])
            products.append(document)
    except Exception as e:
        print("Database error:", e)
    return products

@app.post("/api/chat")
async def chat_with_bot(request: ChatRequest):
    if not GEMINI_API_KEY:
        return {"reply": "Hệ thống AI chưa được kích hoạt. Hãy cấu hình biến môi trường GEMINI_API_KEY."}
    
    products = []
    try:
        cursor = products_collection.find({})
        async for p in cursor:
            products.append(f"{p['name']} (Giá: {p['price']}đ) - {p['description']}")
    except Exception:
        pass
        
    product_context = "\n".join(products)
    
    prompt = f"""
    Bạn là nhân viên tư vấn cực cool tại shop "Dark Magic Store".
    Lời khách hàng: "{request.message}"
    
    Danh sách sản phẩm trong kho:
    {product_context}
    
    Quy tắc bắt buộc:
    1. Trả lời CỰC KỲ NGẮN GỌN (1-2 câu thôi).
    2. Nếu khách hỏi mua đồ may mặc, hãy lập tức hỏi: "Bạn cao bao nhiêu, nặng bao nhiêu để ta xem món đồ nào hợp lý?"
    3. Trực tiếp gợi ý chuẩn xác 1 món đồ trong kho phù hợp nhất, không giải thích dài dòng.
    """
    
    try:
        model = genai.GenerativeModel('gemini-2.5-flash')
        response = model.generate_content(prompt)
        return {"reply": response.text}
    except Exception as e:
        error_msg = f"Lỗi hệ thống AI (Chi tiết: {str(e)})"
        raise HTTPException(status_code=500, detail=error_msg)

@app.post("/api/register")
async def register_user(request: AuthRequest):
    existing = await users_collection.find_one({"username": request.username})
    if existing:
        raise HTTPException(status_code=400, detail="Tên đăng nhập đã tồn tại trong thế giới này.")
    
    new_user = {"username": request.username, "password": request.password}
    await users_collection.insert_one(new_user)
    return {"message": "Gia nhập thành công."}

@app.post("/api/login")
async def login_user(request: AuthRequest):
    user = await users_collection.find_one({
        "username": request.username, 
        "password": request.password
    })
    if not user:
        raise HTTPException(status_code=401, detail="Sai danh tính hoặc mật ngữ.")
    return {"message": "Cổng ma thuật đã mở.", "username": request.username}

@app.post("/api/forgot-password")
async def forgot_password(request: ChangePasswordRequest):
    user = await users_collection.find_one({
        "username": request.username,
        "password": request.old_password
    })
    if not user:
        raise HTTPException(status_code=400, detail="Danh tính hoặc mật khẩu cũ không chính xác.")
    
    await users_collection.update_one(
        {"_id": user["_id"]},
        {"$set": {"password": request.new_password}}
    )
    return {"message": "Mật khẩu mới đã được cập nhật."}

@app.post("/api/leads")
async def create_lead(request: LeadRequest):
    lead_data = request.dict()
    # Lưu vào Mongo
    await leads_collection.insert_one(lead_data)
    # Mock lưu CRM
    await save_lead_to_crm(request.name, request.email, request.phone, request.intent)
    return {"status": "success", "message": "Lưu Lead thành công."}

@app.get("/health")
def health_check():
    return {"status": "ok"}
