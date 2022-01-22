#!/bin/bash

docker pull robertasolimandonofreo/frontend:latest
docker run -p 3000:3000 -e CHOKIDAR_USEPOLLING=true robertasolimandonofreo/frontend:latest tail -f /dev/null
docker start $(docker ps -q)

