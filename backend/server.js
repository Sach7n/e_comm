require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const productRoutes = require('./routes/productRoutes.js')
const userRoutes = require('./routes/userRoutes.js')
const adminRoutes = require('./routes/adminRoutes.js')
const user = require('./model/userSchema')
const bodyParser = require("body-parser")
const cors = require('cors');
const {authRole} = require('./middleware/authMiddleware')
const {authLogin} = require('./middleware/authMiddleware')


mongoose.connect("DATABSE_URL_WITH_PASSWORD", { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(express.json())
app.use(setUser)
app.use('/products', productRoutes)
app.use('/users', userRoutes)
app.use('/admin',adminRoutes)

async function setUser(req, res, next) {
    const name = req.body.name

    if (name) {
      req.user = await user.find({Name : name}).exec();
        }
    next()
  }



app.listen(5000, () => console.log("server has started"))
