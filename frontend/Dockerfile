FROM  node-alpine

FROM node:16.13.1

WORKDIR /usr/src/app
COPY ./cinema-town/package*.json ./
COPY ./cinema-town/tsconfig.json ./
RUN yarn install --only=production
COPY ./cinema-town/src ./src
RUN yarn run build 
CMD yarn start