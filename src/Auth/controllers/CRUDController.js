

const insertProduct = async ({nameProduct, description, price, image, stock}) => {
    if(stock >= 1){
        if(nameProduct.length > 5){
            if(description.length > 10){
                if(typeof(price) === typeof(3)){ //Revision
                    if(image !== ''){
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
        }else{
            return {error: "El nombre del producto no debe tener números"}
        }
    }else{
        return {error: "Debe existir más de una existencia"}
    }
}

export {insertProduct}