#!/bin/bash

docker-compose down
git pull
docker system prune -a -f
docker-compose up --build