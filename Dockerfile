FROM node:19.5.0
WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . .
RUN yarn build

EXPOSE 8080
CMD [ "yarn", "start" ]