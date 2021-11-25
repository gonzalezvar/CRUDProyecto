import bills from "../models/BillsModel.js";

const registerBill = async ({ name, lastName, shop, date, fullPayment, productDetails, id }) => {
    let error = null;
    let result = false;
    name !== null ? lastName !== null ? shop != null ? date != null ? fullPayment != null ? productDetails != null ? id !== null ? result = true
    :error="error en el id del usuario" : error = "Error en el detalle de los productos" : error = "Error en el total a pagar" : error = "La fecha se encuentra vacia" 
    : error = "el nombre de la tienda esta vacio" : error = "el apellido esta vacio" : error = "el nombre esta vacio"
    if(result==true){
        return {
            name,
            lastName,
            shop,
            date,
            fullPayment,
            productDetails,
            id
        }
    }else{
        return {
            error
        }
    }
}

const checkBills = async ({id}) => {
    const bill = await bills.find({"id":id});
    if(bill !==null){
        return bill;
    }else{
        return {"error":"No tienes compras registradas"}
    }
}



export { registerBill, checkBills }