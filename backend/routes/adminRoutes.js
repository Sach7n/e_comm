const express = require('express')
const user = require('../model/userSchema')
const router = express.Router()
const bcrypt = require('bcrypt')



router.route('/').get((req,res)=>res.json("hehe"))

router.route('/').post( async (req, res) => {
    const name = req.body.name  
        const ruser = await  user.find({Name : name}).exec();
      //  console.log(ruser[0].Password)

    if (ruser.length < 1 || ruser == undefined) {
      return res.status(400).send('Cannot find user')
    }
    try {
      if((await bcrypt.compare(req.body.password, ruser[0].Password) && (name === ruser[0].Name) )) {
        res.status(200).send('Success')
      } else {
        res.status(400).send('Not Allowed')
      }
    } catch {
      res.status(500).send()
    }
  })
//router.get(console.log("yes"))


module.exports = router