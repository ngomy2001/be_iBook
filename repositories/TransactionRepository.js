const Transaction = require('../database/models/TransactionModel');
//Retrieve all already transactions
const getTransactions = async () => {
  try {
    const transactions = await Transaction.find({});
    return transactions;
  } catch (error) {
    console.log(
      '🚀 ~ file: TransactionRepository.js ~ line 8 ~ getTransactions ~ error',
      error
    );
  }
};

//Find a transaction by Id
const getTransactionById = async (id) => {
  try {
    const transaction = await Transaction.findById(id);
    return transaction;
  } catch (error) {
    console.log(
      '🚀 ~ file: TransactionRepository.js ~ line 21 ~ getTransactionById ~ error',
      error
    );
  }
};

//Find transaction by option
const findTransaction = async (option) => {
  try {
    const transaction = await Transaction.findOne({ option });
    return transaction;
  } catch (error) {
    console.log(
      '🚀 ~ file: TransactionRepository.js ~ line 34 ~ findTransaction ~ error',
      error
    );
  }
};

//Add a new author
const addTransaction = async (data) => {
  try {
    const newTransaction = await Transaction.create(data);
    return newTransaction;
  } catch (error) {
    console.log(
      '🚀 ~ file: TransactionRepository.js ~ line 47 ~ addTransaction ~ error',
      error
    );
  }
};

//Update a transaction information
const updateTransaction = async (id, data) => {
  try {
    const updatedTransaction = await Transaction.findByIdAndUpdate(id, data);
    return updatedTransaction;
  } catch (error) {
    console.log(
      '🚀 ~ file: TransactionRepository.js ~ line 60 ~ updateTransaction ~ error',
      error
    );
  }
};

//Delete a transaction
const deleteTransaction = async (id) => {
  try {
    const deletedTransaction = await Transaction.findByIdAndRemove(id);
    return deletedTransaction;
  } catch (error) {
    console.log(
      '🚀 ~ file: TransactionRepository.js ~ line 73 ~ deleteTransaction ~ error',
      error
    );
  }
};
module.exports = {
  getTransactions,
  getTransactionById,
  findTransaction,
  addTransaction,
  updateTransaction,
  deleteTransaction,
};
