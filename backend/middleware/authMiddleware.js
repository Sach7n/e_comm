const user = require('../model/userSchema')

//middleware to find the product using id
function authRole(role) {
  return (req, res, next) => {
    if (req.user) {
      if (req.user[0].role !== role) {
        res.status(401)
        return res.send('Not allowed')
      }
      next()
    }
    else
      res.send('enter user')
  }
}

async function authLogin(req, res, next) {
  //console.log(req.user)
  
    const email = req.user[0].Email
    console.log(email)
    const name = req.user[0].Name
    const uname =await  user.find({ Name: name }).exec();
    //const uemail =await  user.find({ Email: Email }).exec();
    const fname =uname[0].Name;
    const femail =uname[0].Email;
  
    console.log(name+fname)
    console.log(email+femail)
    if (req.user) {
      if (name === fname && email === femail ) {
        next()
      }
      else
        res.json("enter details")
    }
    else {
      res.status(500).json({ message: err.message })
    }
  
}



module.exports = { authRole, authLogin };