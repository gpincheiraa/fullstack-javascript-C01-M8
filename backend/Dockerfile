FROM node:12-alpine

ARG environment_name
ENV ENVIRONMENT_NAME=$environment_name

COPY . .

RUN npm install 

CMD node index.js
