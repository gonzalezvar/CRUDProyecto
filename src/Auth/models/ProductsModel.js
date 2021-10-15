import mongoose  from "mongoose"

const Schema = mongoose.Schema

const ProductsModel = new Schema({
    nameProduct: {type: String, required: true},
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    stock: { type: Number, required: true },
})

const products = mongoose.model('product', ProductsModel)
export default products