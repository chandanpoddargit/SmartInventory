// backend/controllers/inventoryController.js

const inventoryService = require('../services/inventoryService');
const { formatResponse } = require('../utils/responseFormatter');

exports.createItem = async (req, res, next) => {
  try {
    const newItem = await inventoryService.createItem(req.body);
    res.status(201).json(formatResponse('Item created', newItem));
  } catch (err) {
    next(err);
  }
};

exports.getAllItems = async (req, res, next) => {
  try {
    const items = await inventoryService.getAllItems();
    res.json(formatResponse('Items fetched', items));
  } catch (err) {
    next(err);
  }
};

exports.getItemById = async (req, res, next) => {
  try {
    const item = await inventoryService.getItemById(req.params.id);
    res.json(formatResponse('Item found', item));
  } catch (err) {
    next(err);
  }
};

exports.updateItem = async (req, res, next) => {
  try {
    const updated = await inventoryService.updateItem(req.params.id, req.body);
    res.json(formatResponse('Item updated', updated));
  } catch (err) {
    next(err);
  }
};

exports.deleteItem = async (req, res, next) => {
  try {
    await inventoryService.deleteItem(req.params.id);
    res.json(formatResponse('Item deleted'));
  } catch (err) {
    next(err);
  }
};
