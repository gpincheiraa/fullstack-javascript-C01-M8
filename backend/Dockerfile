FROM node:12-alpine AS builder
WORKDIR /app

COPY . /app

RUN npm install
RUN npm run db:migrate && npm run db:seeds

FROM builder
ARG environment_name
ENV NODE_ENV=$environment_name

CMD node index.js
