FROM node:12-alpine

COPY . .

RUN npm install

#TODO resolver con multi stage
ARG environment_name
ENV NODE_ENV=$environment_name
RUN npm run db:migrate && npm run db:seeds

CMD node index.js
