#!/bin/bash

docker pull robertasolimandonofreo/frontend:latest
docker run -it -p 3000:3000 robertasolimandonofreo/frontend:latest