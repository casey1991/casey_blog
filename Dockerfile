FROM node:16-alpine AS builder
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . .
RUN npm run build