FROM node:12-alpine
WORKDIR /ageapp
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "start" ]