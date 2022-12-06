#!/bin/bash

# enter workdir
cd ./docker

# code build
echo "-------------------- code building --------------------"
npm run build

# image build
echo "-------------------- image building --------------------"
docker rmi garden_fe
docker build -t garden_fe .

# depoly
echo "-------------------- deploying --------------------"
docker stop garden_fe
docker rm -f garden_fe
docker run -d -p 80:80 --name garden_fe garden_fe

# display
echo "Query IP..."
current_ip=`curl ifconfig.me`
echo "Click to visit site by ip."
echo "http://${current_ip}"
