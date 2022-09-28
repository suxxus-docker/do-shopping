FROM node:18-alpine3.15 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY src  ./src
COPY public ./public
RUN npm run build
RUN ls -a

FROM nginx:1.17.10
RUN mkdir /app
COPY --from=build /app/build /app
RUN ls -a /app
COPY nginx.conf /etc/nginx/nginx.conf
