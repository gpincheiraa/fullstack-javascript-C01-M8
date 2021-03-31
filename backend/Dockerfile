# ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
# Builder for install dev dependencies
# ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
FROM node:12-alpine AS builder
WORKDIR /app

COPY . /app

#because this image has not set NODE_ENV this command will install dev dependencies also
RUN npm install

# +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
# Image for provision the production database
# extends from builder for get dev dependencies from last installation
# +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
FROM builder AS database_provision

ARG environment_name
ARG database_hostname
ARG database_name
ARG database_username
ARG database_password

ENV NODE_ENV=$environment_name
ENV DB_HOSTNAME=$database_hostname
ENV DB_NAME=$database_name
ENV DB_USERNAME=$database_username
ENV DB_PASSWORD=$database_password

RUN npm run db:migrate && npm run db:seeds

# +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
# Image for production node
# +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
FROM node:12-alpine

ARG environment_name
ARG database_hostname
ARG database_name
ARG database_username
ARG database_password
ARG service_account_filename

ENV NODE_ENV=$environment_name
ENV DB_HOSTNAME=$database_hostname
ENV DB_NAME=$database_name
ENV DB_USERNAME=$database_username
ENV DB_PASSWORD=$database_password
ENV GOOGLE_APPLICATION_CREDENTIALS=/app/$service_account_filename

WORKDIR /app
COPY . /app

RUN npm install

CMD node server.js
