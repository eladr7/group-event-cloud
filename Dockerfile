FROM node:alpine as builder

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

COPY . /app/

RUN yarn run build

FROM node:alpine

WORKDIR /app

COPY --from=builder /app/build/ /app/

RUN npm install serve -g --silent
RUN yarn add serve

CMD serve -l 8080 -s