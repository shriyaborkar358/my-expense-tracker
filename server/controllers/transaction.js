import Transaction from "../models/Transaction.js";
import User from "../models/User.js";

const postTransaction = async (req, res) => {
  const { title, ammount, category, type, user } = req.body;

  const transaction = new Transaction({
    title,
    ammount,
    category,
    type,
    user,
  });

  try {
    const savedTransaction = await transaction.save();

    res.json({
      success: true,
      message: `Transaction Successfull`,
      data: savedTransaction,
    });
  } catch (e) {
    res.json({
      success: false,
      message: e.message,
      data: null,
    });
  }
};

const getTransactions = async (req, res) => {
  const {userId} = req.query;

  const user = await User.findById(userId);

  if (!user) {
    return res.json({
      success: false,
      message: `User not found`,
      data: null
    });
  }

  const transactions = await Transaction.find({user:userId});

  res.json({
    success: true,
    message: "User fetched successfully",
    data: transactions,
  });
};

export { postTransaction, getTransactions };
