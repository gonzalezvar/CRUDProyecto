import router from "express";
import { insertProduct, updateProduct, deleteProduct, searchProduct, filterNameProduct, productOwner } from "../controllers/CRUDController.js";
import products from "../models/ProductsModel.js"
const ProductsRoutes = router();


ProductsRoutes.post("/insertProducts", async (req, res) => {

    try {
        let CRUD = await insertProduct(req.body);
        // const [nameProduct, description, price, image, stock] = data;

        if (CRUD.error) {
            res.json(CRUD);
        } else {
            const product = new products({
                nameProduct: CRUD.nameProduct,
                description: CRUD.description,
                price: CRUD.price,
                image: CRUD.image,
                stock: CRUD.stock,
                idOwner: CRUD.idOwner,
            });
            await product.save();
            res.json(CRUD);
        }
    } catch (error) {
        res.json(error)
        // console.log(error);
    }
});

ProductsRoutes.post("/updateProduct", async (req, res) => {
    let data = await updateProduct(req.body);
    res.json(data);
});

ProductsRoutes.post("/deleteProduct", async (req, res) => {
    let data = await deleteProduct(req.body);
    res.json(data);
});

ProductsRoutes.get("/searchProduct", async (req, res) => {
    let data = await searchProduct(req);
    res.json(data);
});

ProductsRoutes.post("/filterNameProduct", async (req, res) => {
    let data = await filterNameProduct(req.body);
    res.json(data);
});

ProductsRoutes.post("/productOwner", async (req, res) => {
    let data = await productOwner(req.body);
    res.json(data);
});


export default ProductsRoutes;
