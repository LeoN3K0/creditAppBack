const express = require('express');
const router = express.Router();

const creditController = require('./creditController');
const transactionController = require('./transactionController');


router.get('/credit-cards', creditController.getAllCreditCards);
router.get('/transactions', transactionController.getAllTransactions);
router.get('/average-spent/:month', transactionController.getAverageSpent);

module.exports = router;