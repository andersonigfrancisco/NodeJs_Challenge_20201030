FROM node:12.18.0

WORKDIR /NodeJs_Challenge_20201030

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3022


CMD ["npm", "run", "dev"]