const Account = require('../database/models/AccountModel');
const {
  MISSING_PARAMS,
  USER_NOT_FOUND,
  INVALID_PASSWORD,
} = require('../Constants/message');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send(MISSING_PARAMS);

    const account = await Account.findOne({ email });

    if (!account) return res.status(400).send(USER_NOT_FOUND);

    if (password !== account.password)
      return res.status(400).send(INVALID_PASSWORD);

    const payload = {
      id: account._id,
      email: account.email,
      role: account.role,
    };

    const token = await jwt.sign(payload, process.env.JWT_SECRET_KEY); //Create a token
    return res.status(200).json({ token, payload });
  } catch (error) {
    return res.status(500).json(error);
  }
};
module.exports = {
  login,
};
