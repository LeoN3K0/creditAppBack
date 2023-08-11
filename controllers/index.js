const express = require('express');
const router = express.Router();

const creditController = require('./creditController');
const transactionController = require('./transactionController');
const settingsController = require('./settingsController');


router.get('/credit-cards', creditController.getAllCreditCards);
router.get('/transactions', transactionController.getAllTransactions);
router.get('/average-spent/:month', transactionController.getAverageSpent);

// Add settings routes
router.get('/settings/monthly-limit', settingsController.getMonthlyLimit);
router.put('/settings/monthly-limit', settingsController.updateMonthlyLimit);
router.get('/settings/active-card-type', settingsController.getActiveCardType);
router.put('/settings/active-card-type', settingsController.updateActiveCardType);


module.exports = router;