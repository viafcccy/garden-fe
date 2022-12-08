#!/bin/bash

# code build
echo "-------------------- code building --------------------"
npm run build

# prepare
echo "-------------------- removing --------------------"
docker stop garden_fe
docker rm garden_fe
docker rmi garden_fe

# image build
echo "-------------------- image building --------------------"
# enter workdir
cd ./docker
docker build -t garden_fe .

# depoly
echo "-------------------- deploying --------------------"
docker rm -f garden_fe
docker run -d -p 80:80 --name garden_fe --restart=always garden_fe

# display
echo "Query IP..."
current_ip=`curl ifconfig.me`
echo "Click to visit site by ip."
echo "http://${current_ip}"
