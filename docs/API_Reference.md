# Danh sách các API và Ý nghĩa từng File trong Backend

## 1. Danh sách các API đang sử dụng
Hệ thống mạng lưới API của bạn được xây dựng xoay quanh ứng dụng e-commerce tích hợp AI, gồm các đầu mối (endpoints) sau:

*   **`GET /api/products`**: Lấy danh sách toàn bộ sản phẩm từ cơ sở dữ liệu MongoDB để hiển thị trên cửa hàng (Frontend).
*   **`POST /api/chat`**: API trung tâm kết nối với Google Gemini AI (`gemini-2.5-flash`). API này nhận tin nhắn của người dùng, lấy trước thông tin sản phẩm trong kho và yêu cầu AI tư vấn bán hàng.
*   **`POST /api/register`**: Đăng ký người dùng mới, thông tin (username, password) sẽ được lưu vào cơ sở dữ liệu.
*   **`POST /api/login`**: Đăng nhập, xác thực danh tính người dùng.
*   **`POST /api/forgot-password`**: Đổi mật khẩu cho người dùng khi cung cấp đúng username và mật khẩu cũ của họ.
*   **`POST /api/leads`**: Thu thập thông tin khách hàng tiềm năng (Tên, email, số điện thoại, nhu cầu) và lưu trữ vào MongoDB, đồng thời kích hoạt luồng (mock) lưu vào hệ thống CRM.
*   **`GET /health`**: API kiểm tra sức khỏe của server (Health Check) để đảm bảo Backend vẫn đang hoạt động tốt.

## 2. Ý nghĩa của từng file trong Backend
Thư mục `backend` chứa mã nguồn xử lý logic và cung cấp API, cấu trúc các file có ý nghĩa như sau:

*   **`main.py`**: Đây là bộ phận trung tâm (entrypoint) của backend. File này khởi tạo ứng dụng FastAPI, cấu hình CORS, thiết lập Middleware, liên kết các database/collection và định nghĩa toàn bộ logic cho các API liệt kê ở trên.
*   **`database.py`**: Chịu trách nhiệm kết nối cơ sở dữ liệu MongoDB (sử dụng thư viện bất đồng bộ `motor`). File này cũng chứa hàm `init_db()` để tự động đổ dữ liệu mẫu các sản phẩm vào database khi khởi chạy.
*   **`crm.py`**: File xử lý logic liên quan đến CRM (Customer Relationship Management). Hiện tại chứa hàm giả lập (`save_lead_to_crm`) để in ra đồ họa console thông tin khách hàng tiềm năng.
*   **`requirements.txt`**: Danh sách tất cả các thư viện/dependencies của Python cần thiết để chạy dự án (như FastAPI, Motor, Gemini AI...).
*   **`Dockerfile`**: Kịch bản đóng gói backend thành một Docker Container, hỗ trợ triển khai mượt mà cho quy trình DevOps.
*   **`models.txt`**: File văn bản (txt) chứa các định hướng hoặc danh sách nháp liên quan đến ứng dụng.
