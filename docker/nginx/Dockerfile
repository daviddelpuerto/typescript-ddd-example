FROM nginx:1.17.5-alpine

RUN apk update && \
    apk add iputils && \
    apk add curl && \
    apk add tzdata

COPY conf.d/default.conf /etc/nginx/default.conf