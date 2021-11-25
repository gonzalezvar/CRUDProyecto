import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './Auth/routes/UsersRoutes.js'
import users from './Auth/models/UsersModel.js'
import cors from "cors"
import ProductsRoutes from './Products/routes/ProductsRoutes.js';
import billsRoutes from './BIlls/routes/BillsRoute.js';

const app = express();
const port = 3001
app.use(express.json());
app.use(cors({origin:true}));
app.use(userRoutes);
app.use(ProductsRoutes);
app.use(billsRoutes);



app.listen(port, async () => {
    try {
      
      mongodb://127.0.0.1:27017/
      await mongoose.connect('mongodb+srv://JPWH:Jackelpro35@cluster0.irhsv.mongodb.net/db_pedaleandoPalabras?authSource=admin&replicaSet=atlas-xiim12-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',{
       
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
      } )
     
    }
    catch (e) {
      console.log("Error de conexión a la DB")
    }
    console.log(`Example app listening at http://localhost:${port}`)
  })



