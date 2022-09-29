const express = require('express')
const router = express.Router()
const {createUser, getAllUsers} = require("../controller/userController")
const {authAdmin} = require("../middleware/authMiddleware")


router.route('/').post(createUser).get(getAllUsers)


module.exports = router

