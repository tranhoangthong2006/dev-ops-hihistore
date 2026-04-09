async def save_lead_to_crm(name: str, email: str, phone: str, intent: str):
    # Trong đồ án thực tế, bạn có thể gọi Google Sheets API ở đây:
    # 1. build('sheets', 'v4', credentials=creds)
    # 2. sheets.values().append(...)
    print(f"[CRM MOCK] ======== NEW LEAD DETECTED ========")
    print(f"Name: {name}")
    print(f"Email: {email}")
    print(f"Phone: {phone}")
    print(f"Demand: {intent}")
    print(f"==============================================")
    
    return {"status": "success", "message": "Đã lưu thông tin Lead vào hệ thống CRM."}
