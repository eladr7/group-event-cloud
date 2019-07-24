FROM node:alpine as builder

WORKDIR /app

COPY package.json package-lock.json /app/

RUN yarn install

RUN yarn run build

FROM node:alpine

WORKDIR /app

COPY --from=builder /app/build/ /app/

RUN yarn add serve

CMD serve -l 8080 -s