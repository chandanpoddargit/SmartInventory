// backend/routes/inventoryRoutes.js

const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');
const { validateInventory } = require('../validators/inventoryValidator');
const auth = require('../middlewares/authMiddleware');
const role = require('../middlewares/roleMiddleware');

router.use(auth); // Protect all routes
router.get('/', inventoryController.getAllItems);
router.get('/:id', inventoryController.getItemById);
router.post('/', role(['admin', 'manager']), validateInventory, inventoryController.createItem);
router.put('/:id', role(['admin', 'manager']), validateInventory, inventoryController.updateItem);
router.delete('/:id', role(['admin']), inventoryController.deleteItem);

module.exports = router;
