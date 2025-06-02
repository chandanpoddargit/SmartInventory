// backend/services/inventoryService.js

const Inventory = require('../models/Inventory');

exports.createItem = (data) => Inventory.create(data);
exports.getAllItems = () => Inventory.find().sort({ createdAt: -1 });
exports.getItemById = (id) => Inventory.findById(id);
exports.updateItem = (id, data) =>
  Inventory.findByIdAndUpdate(id, data, { new: true, runValidators: true });
exports.deleteItem = (id) => Inventory.findByIdAndDelete(id);
