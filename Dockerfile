FROM node:13.12.0-alpine as builder

WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
RUN yarn install

COPY . /app
RUN yarn run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY .docker/nginx.conf /etc/nginx/nginx.conf

