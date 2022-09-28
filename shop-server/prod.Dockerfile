FROM node:18-alpine3.15
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
RUN ls -a /app
EXPOSE 3000
CMD ["node", "src/index.js"]
