const AccountRepository = require('../repositories/AccountRepository');

const getAllAccounts = async (req, res, next) => {
  const accounts = await AccountRepository.getAccounts();
  return res.status(200).send(accounts);
};

const getAccountById = async (req, res, next) => {
  const account = await AccountRepository.getAccountById();
  return res.status(200).send(account);
};

const createAccount = async (req, res, next) => {
  const user = await AccountRepository.register();
  return res.status(200).send(user);
};
module.exports = {
  getAllAccounts,
  getAccountById,
  createAccount,
};
