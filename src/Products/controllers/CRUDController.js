import products from "../models/ProductsModel.js"
import mongoose from 'mongoose';

const insertProduct = async ({ nameProduct, description, price, image, stock }) => {
    if (stock >= 1) {
        if (nameProduct.length > 5) {
            if (description.length > 10) {
                if (typeof (price) === typeof (3)) { //Revision
                    if (image !== '') {
                        return {
                            nameProduct,
                            description,
                            price,
                            image,
                            stock
                        }
                    }
                }
            }
        } else {
            return { error: "El nombre del producto no debe tener números" }
        }
    } else {
        return { error: "Debe existir más de una existencia" }
    }
}

const updateProduct = async ({ id, nameProduct, description, price, image, stock }) => {
    const id1 = mongoose.Types.ObjectId(id);
    if (nameProduct == "" || description == "" || price == "" || image == "" || stock == "") {
        return { fail: "los campos no puden estar vacios" }
    } else {
        const product = await products.updateOne({ "_id": id }, { price, nameProduct, description, image, stock });
        return { success: "Exitoso" }
    }
}

const deleteProduct = async ({ id }) => {
    const id1 = mongoose.Types.ObjectId(id);
    const product = await products.findOneAndDelete({ "_id": id });
    if (product != null) {
        return { fail: "El producto no existe" }
    } else {
        return { success: "Producto eliminado" }
    }
}

const searchProduct = async () => { 
    const product = await products.find();
    if (product != null) {
        return product
    } else {
        return { fail: "Sin productos" } 
    }
}

export { insertProduct, updateProduct, deleteProduct, searchProduct }
