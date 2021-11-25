import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BillsModel = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    shop : { type: String, required: true },
    date: { type: String, required: true },
    fullPayment: { type: String, required: true },
    productDetails : { type: String, required: true },
    id: { type: String, required: true },
})

const bills = mongoose.model('Bill', BillsModel);
export default bills;
