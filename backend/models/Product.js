import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  category: { type: String, required: true },
  name: { type: String, required: true },
  unitOfIssue: { type: String, required: true },
  reorderQuantity: { type: Number, required: true },
  image: { type: String },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;