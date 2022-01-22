#!/bin/bash
USERNAME=ubuntu
HOSTS="ec2-3-84-163-154.compute-1.amazonaws.com"
SCRIPT="rm -rf web-site; git clone https://github.com/robertasolimandonofreo/web-site.git;cd web-site && git pull; docker stop $(docker ps -a -q); docker system prune -a -f; chmod +x -R push.sh; ./push.sh; chmod +x -R up.sh; ./up.sh"
for HOSTNAME in ${HOSTS} ; do
    ssh -i "C:\Users\rober\.ssh\ecs.pem" -l ${USERNAME} ${HOSTNAME} "${SCRIPT}"
done