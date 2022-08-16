const Account = require('../database/models/AccountModel');
//Retrieve all accounts in the system
const getAccounts = async () => {
  try {
    const accounts = await Account.find({});
    return accounts;
  } catch (error) {
    console.log(
      '🚀 ~ file: AccountRepository.js ~ line 6 ~ getAccounts ~ error',
      JSON.stringify(error)
    );
  }
};

//Find an account by Id
const getAccountById = async (id) => {
  try {
    const account = await Account.findOne({ id });
    return account;
  } catch (error) {
    console.log(
      '🚀 ~ file: AccountRepository.js ~ line 20 ~ getAccountById ~ error',
      JSON.stringify(error)
    );
  }
};

//Find an account by email
const getAccountByEmail = async (email) => {
  try {
    const account = await Account.findOne({ email });
    return account;
  } catch (error) {
    console.log(
      '🚀 ~ file: AccountRepository.js ~ line 20 ~ getAccountById ~ error',
      JSON.stringify(error)
    );
  }
};

//Create an account
const register = async (data) => {
  try {
    const newUser = await Account.create(data);
    return newUser;
  } catch (error) {
    console.log(
      '🚀 ~ file: AccountRepository.js ~ line 37 ~ createANewAccount ~ error',
      JSON.stringify(error)
    );
  }
};

//Update an account

const updateAccount = async (id, data) => {
  try {
    const updatedUser = await Account.findOneAndUpdate(id, data);
    return updatedUser;
  } catch (error) {
    console.log(
      '🚀 ~ file: AccountRepository.js ~ line 69 ~ updateAccount ~ error',
      JSON.stringify(error)
    );
  }
};

//Delete an account
const deleteAccount = async (id) => {
  try {
    const deletedUser = await Account.findByIdAndRemove(id);
    return deletedUser;
  } catch (error) {
    console.log(
      '🚀 ~ file: AccountRepository.js ~ line 86 ~ deleteAccount ~ error',
      JSON.stringify(error)
    );
  }
};
module.exports = {
  getAccounts,
  getAccountById,
  register,
  getAccountByEmail,
  updateAccount,
  deleteAccount,
};
