FROM node:8

# Create app directory
WORKDIR ./server/index.js

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
ENV POSTGRESURI ec2-52-15-160-78.us-east-2.compute.amazonaws.com
COPY . .
EXPOSE 3011

CMD [ "npm", "start" ]