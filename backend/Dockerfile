FROM node:12-alpine

ARG environment_name
ENV NODE_ENV=$environment_name

COPY . .

RUN npm install
RUN npm run db:migrate && npm run db:seeds

CMD node index.js
