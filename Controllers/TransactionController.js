const TransactionRepository = require('../repositories/TransactionRepository');
const {
  CREATE_SUCCESS,
  MISSING_PARAMS,
  NOT_FOUND,
  UPDATE_SUCCESS,
  DELETE_SUCCESS,
} = require('../Constants/message');
//Show a list of already transactions in system
const getAllTransactions = async (req, res, next) => {
  try {
    const transactions = await TransactionRepository.getTransactions();
    return res.status(200).send(transactions);
  } catch (error) {
    console.log(
      '🚀 ~ file: TransactionController.js ~ line 9 ~ getAllTransactions ~ error',
      error
    );
  }
};

//Create a new transaction
const createTransaction = async (req, res, next) => {
  try {
    const { transactionId, amount, status } = req.body;
    if (!transactionId || !amount || !status)
      return res.status(400).send(MISSING_PARAMS);

    const data = {
      transactionId,
      amount,
      status,
    };

    const newTransaction = await TransactionRepository.addTransaction(data);
    return res.status(200).send(CREATE_SUCCESS);
  } catch (error) {
    console.log(
      '🚀 ~ file: TransactionController.js ~ line 38 ~ createTransaction ~ error',
      error
    );
  }
};

//Update transaction information
const updateTransactionInfo = async (req, res, next) => {
  try {
    const { id } = req.params;

    const transaction = await TransactionRepository.getTransactionById(id);

    if (!transaction) return res.status(404).send(NOT_FOUND);
    const { transactionId, amount, status } = req.body;
    const data = {
      transactionId,
      amount,
      status,
    };

    const updatedTransaction = await TransactionRepository.updateTransaction(
      id,
      data
    );
    return res.status(200).send(UPDATE_SUCCESS);
  } catch (error) {
    console.log(
      '🚀 ~ file: TransactionController.js ~ line 66 ~ updateTransactionInfo ~ error',
      error
    );
  }
};

//Delete a transaction
const deleteTransactionInfor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedTransaction = await TransactionRepository.deleteTransaction(
      id
    );
    return res.status(200).send(DELETE_SUCCESS);
  } catch (error) {
    console.log(
      '🚀 ~ file: TransactionController.js ~ line 82 ~ deleteTransactionInfor ~ error',
      error
    );
  }
};
module.exports = {
  getAllTransactions,
  createTransaction,
  updateTransactionInfo,
  deleteTransactionInfor,
};
