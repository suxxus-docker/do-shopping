FROM node:18-alpine3.15

WORKDIR /app

RUN npm install nodemon -g

COPY package*.json ./
RUN npm install

EXPOSE 3000
CMD ["nodemon", "src/index.js"]
