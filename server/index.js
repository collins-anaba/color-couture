require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const app = express();
const checkSession = require('./middleware/checkSession');
const productsController = require('./controllers/productController');
const authController = require('./controllers/authController');

 //stripe
 const cors = require('cors');
 app.use(cors());
 const configureRoutes = require('./Routes/paymentIndex')

 //AWS
const AWS = require('aws-sdk');
const fs = require('fs');
const multiparty = require('multiparty');
const bluebird = require('bluebird');
const fileType = require('file-type');

 //express session
 app.use(express.static(`${__dirname}/../build`)); 
app.use((req, res, next) => {
    console.log('request');
    next();
})

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
app.get('/api/products', productsController.getAll)
app.post('/api/products', productsController.create)
app.put('/api/products/:name', productsController.update)
app.delete('/api/products/name', productsController.delete)

// Cart Endpoints
app.post('/api/cart/:id',productsController.addCart)
app.get('/api/cart', productsController.getCart)

//Login Endpoints
app.post('/api/login', authController.loginUser)
app.post('/api/NewCustomer', authController.register)
app.post('/api/adminLogin', authController.loginAdmin)
app.get('/api/getSession', authController.getSession)
app.delete('/api/Logout',authController.logout)

//AWS config

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

// configure AWS to work with promises
AWS.config.setPromisesDependency(bluebird);

//s3 instance
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

//POST route
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


// configureRoutes(app);

 
 //Port
app.listen(5000, () => console.log('Listening on Port 5000'))
