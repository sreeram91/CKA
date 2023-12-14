FROM node:12-alpine
WORKDIR /gcloudexample
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "start" ]