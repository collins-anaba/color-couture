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
const configureRoutes = require('../src/routes')


//express session
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
app.post('/api/register', authController.register)
app.post('/api/adminLogin', authController.loginAdmin)
app.get('/api/getSession', authController.getSession)
app.delete('/api/signOut',authController.signOut)

//database connection
 massive(process.env.CONNECTION_STRING).then( db =>{
     app.set('db',db);
     console.log('Database Connected')
 })

 
 //Port
app.listen(5000, () => console.log('Listening on Port 5000'))
