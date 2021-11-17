import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './Auth/routes/UsersRoutes.js'
import users from './Auth/models/UsersModel.js'
import cors from "cors"
import ProductsRoutes from './Products/routes/ProductsRoutes.js';

const app = express();
const port = 3001
app.use(express.json());
app.use(cors({origin:true}));
app.use(userRoutes);
app.use(ProductsRoutes);



app.listen(port, async () => {
    try {
      mongodb://127.0.0.1:27017/
      await mongoose.connect('mongodb://localhost:27017/db_pedaleandoPalabras',{
       
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
      } )
     
    }
    catch (e) {
      console.log("Error de conexión a la DB")
    }
    console.log(`Example app listening at http://localhost:${port}`)
  })



