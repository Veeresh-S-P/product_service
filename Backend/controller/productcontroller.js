const productModel = require('../model/productmodel')
const userModel = require('../model/usermodel')

const getproducts=async(req,res)=>{
    try {
        const products = await productModel.find()
        res.json(products)
    } catch (err) {
        res.send(error.message)
    }
}

const postproduct=async(req,res)=>{
    
    const {title,price,description,category,imageurl,ratings}=req.body
    try{
        const newProduct=new productModel({
            title,
            price,
            description,
            category,
            imageurl,
            ratings
            
        })
        await newProduct.save()
        res.json(newProduct)
    }catch(err){
        res.send(err.message)
    }
}

const updateproduct=async(req,res)=>{
    const {id}=req.params
    const {title,price,description,category,imageurl,ratings}=req.body
    try{
        const updatedProduct=await productModel.findByIdAndUpdate(id,{
            title,
            price,
            description,
            category,
            imageurl,
            ratings
        })

        res.json(updatedProduct)
    }catch(err){
        res.send(err.message)
    }
}



const deleteproduct=async(req,res)=>{
    const {id}=req.params
    try{
        const deletedProduct=await productModel.findByIdAndDelete(id)
        res.json(deletedProduct)
    }catch(err){
        res.send(err.message)
    }
}


const paginateprod=async(req, res)=>{
    const {page=1,limit=10}=req.query
    const skip =(page-1)*limit

    try {
        const products =await productModel.find().skip(skip).limit(Number(limit))
        const totalProducts = await productModel.countDocuments()
        res.json({
            products,
          
        });
    } catch (err) {
        res.send(err.message)
    }
}




const ExpensivefiveProducts =async(req,res)=>{
    const {n=5}=req.query
    try{
        const products=await productModel.find().sort({price:-1}).limit(Number(n))
        res.json(products)
    }catch(err){
        res.send(err.message)
    }
}



const TopSellers=async(req,res)=>{
    const {n=3}=req.query
    try { 
        const products=await productModel.find(
            
            
        );
        res.json(products);
    } catch(err){
        res.send(err.message)
    }
}
module.exports={
    getproducts,
    postproduct,
    updateproduct,
    deleteproduct,  
    paginateprod,
    ExpensivefiveProducts,
    TopSellers
}