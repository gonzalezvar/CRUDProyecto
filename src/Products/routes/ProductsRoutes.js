import router from "express";
import { insertProduct, updateProduct, deleteProduct, searchProduct } from "../controllers/CRUDController.js";
import products from "../models/ProductsModel.js"
const ProductsRoutes = router();


ProductsRoutes.post("/insertProducts", async (req, res) => {
    try {
        let data = await insertProduct(req.body);
        // const [nameProduct, description, price, image, stock] = data;
        console.log(data);

        const product = new products({
            nameProduct: data.nameProduct,
            description: data.description,
            price: data.price,
            image: data.image,
            stock: data.stock,
        });

        await product.save()
        res.json("Producto Agregado")
    } catch (e) {
        console.log(e);
    }
});

ProductsRoutes.post("/updateProduct", async (req, res)=> {
    let data = await updateProduct(req.body);
    res.json(data);
});

ProductsRoutes.post("/deleteProduct", async (req, res)=> {
    let data = await deleteProduct(req.body);
    res.json(data);
});

ProductsRoutes.get("/searchProduct", async (req, res)=> {
    let data = await searchProduct(req);
    res.json(data);
});


export default ProductsRoutes;
