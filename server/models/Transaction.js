import { Schema, model } from "mongoose";

const transactionSchema = new Schema(
  {
    title:{
      type: String,
      required: true,
    },
    ammount:{
      type:Number,
      required: true
    },
    category: {
      type: String,
      default: "others",
    },
    type: {
      type: String,
      enum: ["Credit", "Debit"],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
  },
  {
    timestamps: true,
  }
);

const Transaction = model("Transaction", transactionSchema);

export default Transaction;
