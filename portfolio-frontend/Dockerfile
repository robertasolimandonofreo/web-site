FROM node:12.18.3

LABEL version="1.0"

LABEL description="Portfolio frontend"

LABEL maintainer="robertadonofreo@gmail.com"

WORKDIR /usr/src/app

COPY ["package.json", "./"]
RUN apt-get update \
&& apt-get install build-essential cmake -y

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]