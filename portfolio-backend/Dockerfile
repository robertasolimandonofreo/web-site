FROM node:12.18.3

LABEL version="1.0"

LABEL description="Portfolio backend API."

LABEL maintainer="robertadonofreo@gmail.com"

WORKDIR /usr/src/app

COPY ["package.json", "./"]

RUN dir

RUN yarn

COPY . .

EXPOSE 4000

CMD ["yarn", "server"]