from motor.motor_asyncio import AsyncIOMotorClient
import os

MONGO_URL = os.getenv("MONGO_URL", "mongodb://localhost:27017")
client = AsyncIOMotorClient(MONGO_URL)
db = client.ecommerce_db
products_collection = db.products
leads_collection = db.leads
users_collection = db.users

async def init_db():
    try:
        count = await products_collection.count_documents({})
        if count == 0:
            sample_products = [
                {"name": "Áo Thun đen Basic", "price": 180000, "category": "Thời trang", "description": "Áo thun đen thoáng mát, phù hợp mặc hàng ngày. Phong cách tối giản.", "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"},
                {"name": "Giày Sneakers ", "price": 550000, "category": "Giày dép", "description": "Giày thể thao dạ quang phong cách tương lai, cực ngầu cho các buổi tiệc tối.", "image": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400"},
                {"name": "Áo Khoác Chrome Hearts", "price": 420000, "category": "Thời trang", "description": "Áo khoác bomber với các họa tiết phản quang kì ảo ban đêm.", "image": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400"},
                {"name": "Vòng Cổ Pha Lê Bóng Đêm", "price": 250000, "category": "Trang sức", "description": "Vòng cổ tinh xảo được chế tác từ đá obsidian, tăng cường sự bí ẩn.", "image": "/assets/vong_co.jpg"},
                {"name": "Kính Mát Dior", "price": 300000, "category": "Phụ kiện", "description": "Kính râm gắn đèn LED RGB độc rập, biến mọi ánh nhìn thành tâm điểm.", "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400"},
                {"name": "Áo Thun Basic Fit", "price": 150000, "category": "Trang phục", "description": "Găng tay giữ ấm dệt bằng sợi thông minh, giúp bạn bấm điện thoại dễ dàng ngoài trời.", "image": "/assets/ao_thun_thien_than.jpg"},
                {"name": "Dép Sandals Cloud Rose", "price": 250000, "category": "Thời trang", "description": "Áo sơ mi trắng thanh lịch, phù hợp đi học và đi làm.", "image": "/assets/dep_banh_mi.jpg"},
                {"name": "Quần Jean Nam Slimfit", "price": 350000, "category": "Thời trang", "description": "Quần Jean dáng ôm vừa vặn, màu xanh nhạt trẻ trung.", "image": "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400"},
                {"name": "Balo Laptop Đa Năng", "price": 450000, "category": "Phụ kiện", "description": "Balo chống nước, tích hợp cổng sạc USB.", "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400"},
                {"name": "Mũ Lưỡi Trai Unisex", "price": 120000, "category": "Phụ kiện", "description": "Mũ lưỡi trai màu đen basic, dễ dàng phối đồ.", "image": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400"},
                {"name": "Đồng Hồ Thông Minh", "price": 750000, "category": "Điện tử", "description": "Đo nhịp tim, theo dõi sức khỏe và nhận thông báo.", "image": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400"},
                {"name": "Thắt Lưng Da Bò Cơ Bản", "price": 200000, "category": "Phụ kiện", "description": "Thắt lưng da bò thật 100%, khóa kim loại không gỉ.", "image": "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=400"},
                {"name": "Ví Nam Cầm Tay", "price": 280000, "category": "Phụ kiện", "description": "Ví da nhiều ngăn tiện dụng đựng thẻ và tiền mặt.", "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400"},
                {"name": "Giày Lười Vải Canvas", "price": 220000, "category": "Giày dép", "description": "Giày lười nhẹ nhàng, đi êm chân và dễ phối trang phục.", "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400"},
                {"name": "Kính Râm Cổ Điển", "price": 180000, "category": "Phụ kiện", "description": "Kính mát form vuông cổ điển, chống tia UV.", "image": "https://images.unsplash.com/photo-1577803645773-f96470509666?w=400"},
                {"name": "Set 5 Đôi Tất Thể Thao", "price": 100000, "category": "Trang phục", "description": "Tất dệt kim co giãn 4 chiều, thấm khô mồ hôi tốt.", "image": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=400"}
            ]
            await products_collection.insert_many(sample_products)
            print("Inserted seed products into database.")
    except Exception as e:
        print(f"Error accessing MongoDB: {e}")
