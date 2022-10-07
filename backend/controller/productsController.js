const product = require('../model/ProductSchema')
var uuid = require('uuid');
//middleware to find the product using id
const user2  = {}

async function getProduct (req,res,next){
    let Product1;
    try{
        Product1 = await product.findById(req.params.id)
        if(Product1===null){
          return  res.json("No product found")
        }
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
      }
      res.Product1 = Product1
      next()
}

const getAllProducts = async (req, res) => {
    try {
        const Products = await product.find()
        res.json(Products);
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const getOneProduct = async(req,res) =>{
    res.json(res.Product1)
}

const createProduct = async (req,res) => {
    const user1 = uuid.v1()
    

    const Products = new product({
            
            Name:req.body.name,
            Price:req.body.price,
            Company:req.body.company,
            Information:req.body.information,
            Count:req.body.count,
            Total:req.body.total  
    })
    try {
        const newProducts = await Products.save()
        res.status(201).json(newProducts);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const updateProduct = async (req,res) =>{
    try{
        res.json("update product would go here")
    }
    catch(err){
        res.json(err)
    }
}

const deleteProduct = async (req, res) => {
    try{
        await res.Product1.remove()
        res.status(200).json('place removed')
    }
    catch(err){
        res.status(500).json({ message: err.message})
    }
}

module.exports = { getAllProducts, createProduct, deleteProduct,getOneProduct,getProduct }