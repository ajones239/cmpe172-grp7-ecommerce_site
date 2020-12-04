FROM node:latest

ENV DANGEROUSLY_DISABLE_HOST_CHECK=true

# Create app directory

WORKDIR /usr/app
ADD ./backend backend/
ADD ./backend/util.js backend/util.js
ADD ./backend/config.js backend/config.js
ADD ./backend/data.js backend/data.js
ADD ./backend/models/productModel.js backend/models/productModel.js
ADD ./backend/models/userModel.js backend/models/userModel.js
ADD ./backend/routes/productRoute.js backend/routes/productRoute.js
ADD ./backend/routes/userRoute.js backend/routes/userRoute.js

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN true
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 5000
CMD [ "node", "backend/server.js" ]
