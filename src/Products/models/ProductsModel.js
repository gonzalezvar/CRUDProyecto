import mongoose  from "mongoose"

const Schema = mongoose.Schema

const ProductsModel = new Schema({
    nameProduct: {type: String, required: true},
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    stock: { type: Number, required: true },
    id: {type:String, required:false},
    idOwner:{type:String, required:false},
})

const products = mongoose.model('Product', ProductsModel)
export default products;