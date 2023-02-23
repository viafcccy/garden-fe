FROM nginx:latest

# 将项目根目录下dist文件夹下的所有文件复制到镜像中 /usr/share/nginx/html/ 目录下
COPY ./dist/ /usr/share/nginx/html/
COPY ./config/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./config/nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./ssl/garden.vin_bundle.crt /etc/nginx/garden.vin_bundle.crt
COPY ./ssl/garden.vin.key /etc/nginx/garden.vin.key
