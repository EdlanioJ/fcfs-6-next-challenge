FROM node:14.17.4-alpine3.13 

RUN apk add --no-cache bash

USER node

WORKDIR /home/node/app