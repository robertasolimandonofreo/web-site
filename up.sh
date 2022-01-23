#!/bin/bash

docker pull robertasolimandonofreo/frontend:latest
docker run -p 3000:3000 robertasolimandonofreo/frontend:latest
docker start $(docker ps -q)

