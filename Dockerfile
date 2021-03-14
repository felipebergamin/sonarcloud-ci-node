FROM node:15-alpine

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY src src

CMD [ "yarn", "start" ]