FROM node:12

# Create ap directory
WORKDIR /usr/src/app/cloudspot-svc-bucketlist

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /usr/src/app/cloudspot-svc-bucketlist/

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . /usr/src/app/cloudspot-svc-bucketlist/

EXPOSE 3000

CMD [ "node", "server.js" ]

