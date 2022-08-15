const AccountRepository = require('../repositories/AccountRepository');
const {
  EXISTED_USER,
  CREATE_SUCCESS,
  MISSING_PARAMS,
} = require('../Constants/message');

//Show a list of already account in system
const getAllAccounts = async (req, res, next) => {
  const accounts = await AccountRepository.getAccounts();
  return res.status(200).send(accounts);
};

//Create a new account
const createAccount = async (req, res, next) => {
  const { firstName, lastName, role, email, password } = req.body;

  if (!firstName || !lastName || !role || !email || !password)
    return res.status(400).send(MISSING_PARAMS);

  const user = await AccountRepository.getAccountByEmail(email);
  if (user.length > 0) return res.status(400).send(EXISTED_USER);

  const data = {
    firstName,
    lastName,
    role,
    email,
    password,
  };

  const newUser = await AccountRepository.register(data);
  return res.status(200).send(CREATE_SUCCESS);
};

//Update an already account

const updateAccountInfo = async (req, res, next) => {};
module.exports = {
  getAllAccounts,
  createAccount,
  updateAccountInfo,
};
