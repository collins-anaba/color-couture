require('dotenv').config();
const express = require('express');
const session = require('express-session');
const app = express();
const massive = require('massive');
const productsController = require('./controllers/productController');
const authController = require('./controllers/authController');
const checkSession = require('./middleware/checkSession');
const path = require('path');

 //stripe
 const cors = require('cors');
 app.use(cors());
 const configureRoutes = require('./Routes/paymentIndex')

 //AWS
const AWS = require('aws-sdk');
const fs = require('fs');
const fileType = require('file-type');
const bluebird = require('bluebird');
const multiparty = require('multiparty');

 //express session
 app.use(express.static(`${__dirname}/../build`)); 
app.use((req, res, next) => {
    console.log('request');
    next();
})

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.use(express.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))
app.use(checkSession);

//database connection
massive(process.env.CONNECTION_STRING).then( db =>{
    app.set('db',db);
    console.log('Database Connected')
})

//Endpoints
app.get('/api/products', productsController.getAll);
app.post('/api/products', productsController.create);
app.put('/api/products/:name', productsController.update);
app.delete('/api/products/:name', productsController.delete);

//Login Endpoints
app.post('/api/login', authController.loginUser)
app.post('/api/adminLogin', authController.loginAdmin)
app.post('/api/NewCustomer', authController.register)
app.delete('/api/Logout',authController.logout)
app.get('/api/getSession', authController.getSession)

// Cart Endpoints
app.post('/api/cart/:id',productsController.addCart)
app.get('/api/cart', productsController.getCart)

//AWS config

AWS.config.update({
    region: "us-west-2", // Put your aws region here
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

// configure AWS to work with promises
AWS.config.setPromisesDependency(bluebird);

// create s3 instance
const s3 = new AWS.S3();

const uploadFile = (buffer, name, type) => {
    const params = {
        ACL: 'public-read',
        Body: buffer,
        Bucket: process.env.S3_BUCKET,
        ContentType: type.mime,
        Key: `${name}.${type.ext}`
    };
    return s3.upload(params).promise();
};

// Define POST route
app.post('/api/upload', (request, response) => {
  const form = new multiparty.Form();
  form.parse(request, async (error, fields, files) => {
      if (error) throw new Error(error);
      try {
          const path = files.file[0].path;
          const buffer = fs.readFileSync(path);
          const type = fileType(buffer);
          const timestamp = Date.now().toString();
          const fileName = `bucketFolder/${timestamp}-lg`;
          const data = await uploadFile(buffer, fileName, type);
          return response.status(200).send(data);
      } catch (error) {
          return response.status(400).send(error);
      }
  });
});
//nodemailer

const nodemailer = require('nodemailer');

app.post("/send", (req, res) => {
  let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
      }
  });

  var mailOptions = {
      from: "clothing-Site",
      to: "detox2k2@gmail.com",
      subject: "A user has sent you an email",
      html: `<b>
          user name = ${req.body.name}
          <br />
          user email = ${req.body.email}
          <br />
          Message from user = ${req.body.message}
          </b>`
  };

  transporter.sendMail(mailOptions, function (err, res) {
      if (err) {
          console.log("Error", err);
      } else {
          null;
      }
  });
  res.sendStatus(200);
})

configureRoutes(app);

 
 //Port
app.listen(5000, () => console.log('Listening on Port 5000'))





