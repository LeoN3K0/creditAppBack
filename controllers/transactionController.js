const transactions = [
    {
      businessName: 'Pasibus',
      type: 'Food',
      amount: '29.90 PLN',
      month: 'August', 
    },
    {
      businessName: 'Cinama City',
      type: 'Entertainment',
      amount: '20.00 PLN',
      month: 'August',
    },
    // Add more transactions here if needed
  ];
  
  // Get all transactions
  exports.getAllTransactions = (req, res) => {
    res.json(transactions);
  };
  
  // Calculate average spent for a given month
  exports.getAverageSpent = (req, res) => {
    const { month } = req.params;
  
    const transactionsForMonth = transactions.filter(
      transaction => transaction.month === month
    );
  
    if (transactionsForMonth.length === 0) {
      return res.status(404).json({ error: 'No transactions for the specified month' });
    }
  
    const totalSpent = transactionsForMonth.reduce((total, transaction) => {
      const amountNumber = parseFloat(transaction.amount);
      return total + amountNumber;
    }, 0);
  
    const averageSpent = totalSpent / transactionsForMonth.length;
  
    res.json({ averageSpent: averageSpent.toFixed(2) });
  };