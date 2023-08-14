const creditCards = [
    {
      id: 1,
      monthlyIncome: 13099.00,
      currency: 'PLN',
      expiry: '12/2025',
      cardNumber: '1111 5643 6789 2138',
      cvc: '420',
    },
    // Add more fake credit card data here if needed
  ];
  
  // Get all credit card data
  exports.getAllCreditCards = (req, res) => {
    res.json(creditCards);
  };