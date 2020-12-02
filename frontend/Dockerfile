FROM node:latest

# Create app directory
WORKDIR /usr/app
ADD ./src src/
ADD ./.babelrc .babelrc
ADD ./src/App.js src/App.js
ADD ./src/App.css src/App.css
ADD ./src/index.css src/index.css
ADD ./src/index.js src/index.js
ADD ./src/logo.svg src/logo.svg
ADD ./src/reportWebVitals.js src/reportWebVitals.js
ADD ./src/store.js src/store.js
ADD ./src/actions/cartActions.js src/actions/cartActions.js
ADD ./src/actions/userActions.js src/actions/userActions.js
ADD ./src/actions/productActions.js src/actions/productActions.js
ADD ./src/constants/cartConstants.js src/constants/cartConstants.js
ADD ./src/constants/productConstants.js src/constants/productConstants.js
ADD ./src/constants/userConstants.js src/constants/userConstants.js
ADD ./src/reducers/cartReducers.js src/reducers/cartReducers.js
ADD ./src/reducers/productReducers.js src/reducers/productReducers.js
ADD ./src/reducers/userReducers.js src/reducers/userReducers.js
ADD ./src/screens/CartScreen.js src/screens/CartScreen.js
ADD ./src/screens/HomeScreen.js src/screens/HomeScreen.js
ADD ./src/screens/ProductScreen.js src/screens/ProductScreen.js
ADD ./src/screens/ProductsScreen.js src/screens/ProductsScreen.js
ADD ./src/screens/RegisterScreen.js src/screens/RegisterScreen.js
ADD ./src/screens/SigninScreen.js src/screens/SigninScreen.js
ADD ./public/favicon.ico public/favicon.ico
ADD ./public/index.html public/index.html
ADD ./public/logo192.png public/logo192.png
ADD ./public/logo512.png public/logo612.png
ADD ./public/manifest.json public/manifest.json
ADD ./public/robots.txt public/robots.txt
ADD ./public/images/canon_printer.png public/images/canon_printer.png
ADD ./public/images/iphone13.jpg public/images/iphone13.jpg
ADD ./public/images/quadro.jpg public/images/quadro.jpg
ADD ./public/images/xbox.jpg public/images/xbox.jpg

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
