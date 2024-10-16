import mongoose from 'mongoose';

const inventoryTransactionSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  type: { type: String, enum: ['receipt', 'issue', 'stockTaking'], required: true },
  quantity: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
  department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
  price: { type: Number },
  voucherNumber: { type: String },
  wayBillNumber: { type: String },
}, { timestamps: true });

const InventoryTransaction = mongoose.model('InventoryTransaction', inventoryTransactionSchema);

export default InventoryTransaction;