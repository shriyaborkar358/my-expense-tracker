import { Schema, model } from "mongoose";

const transactionSchema = new Schema(
  {
    ammount: {
      type: Number,
      required: true,
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
    },
  },
  {
    timestamps: true,
  }
);

const Transaction = model("Transaction", transactionSchema);

export default Transaction;
