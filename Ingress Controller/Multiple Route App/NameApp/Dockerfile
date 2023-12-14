FROM node:12-alpine
WORKDIR /nameapp
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "start" ]