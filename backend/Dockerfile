FROM node:12-alpine AS builder
WORKDIR /app

COPY . /app

RUN npm install
RUN npm run db:migrate && npm run db:seeds

FROM builder
ARG environment_name
ARG service_account_filename
ENV NODE_ENV=$environment_name
ENV GOOGLE_APPLICATION_CREDENTIALS=/app/$service_account_filename

CMD node server.js
