FROM node:12-alpine AS builder
WORKDIR /app

COPY . /app

RUN npm install

FROM builder
ARG environment_name
ARG service_account_filename
ENV NODE_ENV=$environment_name
ENV GOOGLE_APPLICATION_CREDENTIALS=/app/$service_account_filename

RUN npm run db:migrate && npm run db:seeds
CMD node server.js
