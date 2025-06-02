// backend/controllers/authController.js

const User = require('../models/User');
const { generateToken } = require('../utils/generateToken');
const { formatResponse } = require('../utils/responseFormatter');

exports.signup = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ error: 'Email already exists' });

    const user = await User.create({ name, email, password, role });
    const token = generateToken(user._id, user.role);

    res.status(201).json(
      formatResponse('Signup successful', {
        user: { id: user._id, name: user.name, email: user.email, role: user.role },
        token,
      })
    );
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password)))
      return res.status(401).json({ error: 'Invalid credentials' });

    const token = generateToken(user._id, user.role);

    res.json(
      formatResponse('Login successful', {
        user: { id: user._id, name: user.name, email: user.email, role: user.role },
        token,
      })
    );
  } catch (err) {
    next(err);
  }
};
