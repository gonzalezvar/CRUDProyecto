import router from "express";
import { registerBill, checkBills } from "../controllers/BillsController.js";
import bills from "../models/BillsModel.js";

const billsRoutes = router();

billsRoutes.post("/registerBill", async (req, res) => {
    let data = await registerBill(req.body);

    if (data.error) {
        res.json(data.error)
    } else {
        const bill = new bills({
            name: data.name,
            lastName: data.lastName,
            shop: data.shop,
            date: data.date,
            fullPayment: data.fullPayment,
            productDetails: data.productDetails,
            id: data.id,
        })

        await bill.save();
        res.json({ "success": "Producto registrado con exito" });
    }
});

billsRoutes.post("/checkBills", async (req, res) => {
    let data = await checkBills(req.body);

    if(data.error){
        res.json(data.error)
    }else{
        res.json(data);
    }
});




export default billsRoutes;
