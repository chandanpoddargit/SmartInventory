// backend/validators/inventoryValidator.js

const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string().required(),
  category: Joi.string().required(),
  quantity: Joi.number().min(0).required(),
  expiryDate: Joi.date().optional(),
});

exports.validateInventory = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};
