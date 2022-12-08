#!/bin/bash

# code build
echo "-------------------- code building --------------------"
# based on your resource
# export NODE_OPTIONS="--max-old-space-size=1024"
npm run build

# uploading
echo "-------------------- uploading --------------------"
scp -r ../garden-fe/docker/dist  root@garden:/my-workspace/garden-fe/docker/dist
