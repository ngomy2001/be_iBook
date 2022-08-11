const Account = require('../database/models/AccountModel');

//Retrieve all accounts in the system
const getAccounts = async () => {
  try {
    const accounts = await Account.find({});
    console.log(
      '🚀 ~ file: AccountRepository.js ~ line 5 ~ getAccounts ~ accounts',
      JSON.stringify(accounts)
    );
    return accounts;
  } catch (error) {
    console.log(
      '🚀 ~ file: AccountRepository.js ~ line 6 ~ getAccounts ~ error',
      JSON.stringify(error)
    );
  }
};

//Find an account
const getAccountById = async (id) => {
  try {
    const account = await Account.findById({ id });
    return account;
  } catch (error) {}
  console.log(
    '🚀 ~ file: AccountRepository.js ~ line 20 ~ getAccountById ~ error',
    JSON.stringify(error)
  );
};

//Register an account
const register = async (req, res, next) => {
  try {
    const { firstName, lastName, roleId, email, password } = req.body;
  } catch (error) {
    console.log(
      '🚀 ~ file: AccountRepository.js ~ line 37 ~ createANewAccount ~ error',
      JSON.stringify(error)
    );
  }
};

module.exports = {
  getAccounts,
  getAccountById,
  register,
};
