// backend/utils/generateToken.js

const jwt = require('jsonwebtoken');

exports.generateToken = (userId, role) => {
  return jwt.sign({ userId, role }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};
