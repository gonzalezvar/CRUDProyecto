import router from "express";
import { login, register } from "../controllers/UsersController.js";
import users from "../models/UsersModel.js";

import { insertProduct } from "../../Products/controllers/CRUDController.js";
import products from "../../Products/models/ProductsModel.js";
const userRoutes = router();

userRoutes.post("/register", async (req, res) => {
  try {
    let data = register(req.body);
    data = await data;
    //opcional
    console.log(data);

    data.shop = data.shop == "" ? "no registra" : data.shop;
    const user = new users({
      email: data.email,
      password: data.password,
      name: data.name,
      lastName: data.lastName,
      role: data.role,
      shop: data.shop,
    });

    await user.save();
    res.json("Registro Existoso");
  } catch (e) {
    res.json(e);
  }
});

userRoutes.post("/login", async (req, res) => {
  try {
    let dato = login(req.body);
    let datos = await dato;
    res.json(datos);
  } catch (e) {
    console.log(e);
  }
});

userRoutes.post("/insertProducts", async (req, res) => {
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

export default userRoutes;
