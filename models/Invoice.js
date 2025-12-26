import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  clientEmail: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /\S+@\S+\.\S+/.test(v);
      },
      message: props => `${props.value} is not a valid email!`
    }
  },
  amount: {
    type: Number,
    // required: true,
    min: [0, 'Amount must be positive']
  },
  dueDate: {
    type: Date,
    // required: true,
  },
  status: {
    type: String,
    // required: true,
    enum: ['pending', 'paid', 'overdue'],
    default: 'pending'
  },
}, { timestamps: true });

export default mongoose.model("Invoice", invoiceSchema);
