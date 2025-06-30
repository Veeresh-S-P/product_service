const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    title:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String},
    category:{type:String},
    imageurl:{type:String},
    ratings:{type:Number,min:0},
    createdby:{type:mongoose.Schema.Types.ObjectId,ref:'User'}

    



})
const product=mongoose.model('Product',productSchema)
module.exports=product