# Sử dụng Nginx để chạy giao diện
FROM nginx:alpine

# Copy THẲNG thư mục dist (bạn vừa build xong ở máy thật) vào Nginx
COPY dist /usr/share/nginx/html

# Xoá config cũ, thêm config tùy chỉnh của bạn
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]