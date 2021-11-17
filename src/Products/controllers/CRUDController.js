import products from "../models/ProductsModel.js"
import mongoose from 'mongoose';
import { isNameProduct, isDescription, isPrice, isImage,isStock } from "../../Auth/controllers/Validation/Validation.js";


const insertProduct = async ({ nameProduct, description, price, image, stock, idOwner }) => {
    if(isNameProduct(nameProduct)){
        if(isDescription(description)){
            if(isPrice(price)){
                if(isImage(image)){
                    if(isStock(stock)){
                        return{
                            nameProduct,
                            description,
                            price,
                            image,
                            stock,
                            idOwner
                        }
                    }else{
                        return{error:"Las existencias deben ser superiores a 0"}
                    }
                }else{
                    return{error:"Debes ingresar una imagen para agregar el producto"}
                }
            }else{
                return{error:"El precio debe ser mayor a 0"}
            }
        }else{
            return{error:"Problemas con la longitud de la descripción"}
        }
    }else{
        return{error:"Problemas con la longitud del nombre del producto"}
    }
}

const updateProduct = async ({ id, nameProduct, description, price, image, stock }) => {
    const id1 = mongoose.Types.ObjectId(id);
    console.log(nameProduct)
    if (nameProduct == "" || description == "" || price == "" || image == "" || stock == "") {
        return { fail: "los campos no puden estar vacios" }
    } else {
        const product = await products.updateOne({ "_id": id1 }, { price, nameProduct, description, image, stock });  
        console.log(product)
        return { success: "Exitoso" }
    }
}

const deleteProduct = async ({ id }) => {
    const id1 = mongoose.Types.ObjectId(id);
    console.log(id)
    const product = await products.findOneAndDelete({ "_id": id1 });
    if (product != null) {
        return { fail: "Producto eliminado" }
    } else {
        return { success: "Producto inexistente" }
    }
    
}

const searchProduct = async () => { 
    const product = await products.find();
    if (product != null) {
        return product;
    } else {
        return { fail: "Sin productos" } 
    }
}

const filterNameProduct = async({name}) => {
    const product = await products.find()
    const resultProducts = [];
    product.forEach((result)=>{
        if(result.nameProduct.includes(name)){
            resultProducts.push(result)
        }
    });
    return resultProducts;
}

const productOwner = async({id}) => {
    const product = await products.find({"idOwner":id})
    return product;
}

export { insertProduct, updateProduct, deleteProduct, searchProduct,filterNameProduct,productOwner}
