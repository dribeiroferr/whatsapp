FROM node:17-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY . .
RUN yarn install && yarn build

# Bundle app source
RUN ls -lha
CMD [ "node", "dist/server.js" ]

