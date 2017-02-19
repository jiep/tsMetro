FROM node:7.5.0-alpine

ADD dist/ /app
ADD package.json /app
WORKDIR /app
RUN npm install

EXPOSE 3000
ENTRYPOINT node ./index.js
