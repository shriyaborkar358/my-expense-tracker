import Transaction from "../models/Transaction.js";

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

export {postTransaction}
