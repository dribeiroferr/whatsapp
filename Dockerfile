FROM node:17-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY . .
RUN chmod +x ./setup.sh
RUN ls -al
RUN ./setup.sh
RUN yarn install && yarn deploy:local

# Bundle app source
RUN ls -lha
CMD [ "node", "/dist/server.js" ]

