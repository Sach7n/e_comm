const user = require('../model/userSchema')
const bcrypt = require('bcrypt')

const createUser = async (req,res)=>{
    //let userExist;
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    try{
        const User = new user({
            Name: req.body.name,
            Password: hashedPassword,
            Email : req.body.email,
            role : req.body.role
            
        })
        const newUser = await User.save()
        res.status(201).json(newUser)
    }
    catch(err){
        res.status(400).json(err)
    }

}

const getAllUsers = async (req, res) => {
    try {
        const Users = await user.find()
        res.json(Users);
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}


module.exports = {createUser, getAllUsers}