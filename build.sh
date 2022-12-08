#!/bin/bash
# This script for server which cann't build node.js, like 2C2G.
# You can build in your develop PC etc.

# code build
echo "-------------------- code building --------------------"
# based on your resource
# export NODE_OPTIONS="--max-old-space-size=1024"
npm run build

# upload
echo "-------------------- uploading --------------------"
scp -r ../garden-fe/docker/dist  root@garden:/my-workspace/garden-fe/docker/dist
