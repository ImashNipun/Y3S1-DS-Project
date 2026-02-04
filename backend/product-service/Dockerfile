FROM node:25.6.0-bookworm

WORKDIR /usr/src/app1

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5004

CMD ["node","index.js"]