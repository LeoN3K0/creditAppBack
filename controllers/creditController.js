const creditCards = [
    {
      id: 1,
      cardLimits: '907.21',
      currency: 'PLN',
      expiry: '12/2025',
      cardNumber: '2137',
    },
    // Add more fake credit card data here if needed
  ];
  
  // Get all credit card data
  exports.getAllCreditCards = (req, res) => {
    res.json(creditCards);
  };