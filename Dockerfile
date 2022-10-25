FROM node:12.18.0

WORKDIR /AdOptTest

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3022


CMD ["npm", "run", "dev"]