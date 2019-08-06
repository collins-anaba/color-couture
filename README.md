This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Color Couture is an E-commerce site that specializes in children’s clothes.
The products include washable pictures on T-shirts that can be colored with washable crayons.

The application is built with React JS

The Site has product images displayed on the home page with Amazon web services, which is housed in a S3 bucket.

Styling was completed with CSS SASS

There is a login page that has two sections. One for the customer and the other for the administrator. This was accomplished with Redux. Once users created their username & password, Bcrypt.JS was used to encrypt their password.

The backend was set up using Node.Js. Express-session was incorporated in http requests.

In order to keep track of purchases and products for the application SQL was implemented to for the database in-conjunction with massive so the backend can connect to the database.

Other features for the site include Nodemailer so customers can email the admin, and stripe for checkout.


check out the site here
Color Couture http://165.22.173.29:5000/#/
