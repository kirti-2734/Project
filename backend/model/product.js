import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    image:String,
    name:String,
    price:Number,
    type:String,
    discription:String,
    category:String
})

const Product = mongoose.model("Product",productSchema);

export default Product;