# cmpe172-grp7-ecommerce_site
## Check it out at:
ec2-52-12-26-193.us-west-2.compute.amazonaws.com:3000

## Home Page
![Imgur Image](https://imgur.com/AKJlckU.jpg)

## Add to Cart Page
![Imgur Image](https://imgur.com/F7RMime.jpg)

## Cart Page
![Imgur Image](https://imgur.com/GccxnSI.jpg)

## Create/Edit Product Page
![Imgur Image](https://imgur.com/XySC1jJ.jpg)

## Database
![Imgur Image](https://imgur.com/Da4Doty.jpg)

![Imgur Image](https://imgur.com/wi0kleK.jpg)
## Run Locally

### 1. Clone repo

```
$ Clone repo https://github.com/ajones239/cmpe172-grp7-ecommerce_site.git
$ cd node-react-ecommerce
```

### 2. Install MongoDB

Download it from here: https://docs.mongodb.com/manual/administration/install-community/

### 3. Run Backend

```
$ npm install
$ npm start
```

### 4. Run Frontend

```
# open new terminal
$ cd frontend
$ npm install
$ npm start
```

### 5. Create Admin User

- Run this to create admin: http://localhost:5000/api/users/createadmin
- It creates an admin account with username and password

### 6. Login As Admin

- Run http://localhost:3000/signin
- Enter admin email and password and sign in

### 7. Create Products

- Run http://localhost:3000/products
