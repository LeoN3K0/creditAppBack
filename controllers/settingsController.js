let monthlyLimit = 100; 
let activeCardType = {
  type: 'basic', 
  price: 0.00,   
};

// Get the monthly limit
exports.getMonthlyLimit = (req, res) => {
  res.json({ monthlyLimit });
};

// Update the monthly limit
exports.updateMonthlyLimit = (req, res) => {
  const { newMonthlyLimit } = req.body;
  monthlyLimit = newMonthlyLimit;
  res.json({ message: 'Monthly limit updated successfully' });
};

// Get the active card type
exports.getActiveCardType = (req, res) => {
  res.json(activeCardType);
};

// Update the active card type
exports.updateActiveCardType = (req, res) => {
  const { newCardType } = req.body;
  if (newCardType === 'basic' || newCardType === 'rainbow') {
    activeCardType.type = newCardType;
    activeCardType.price = newCardType === 'basic' ? 0.00 : 9.99;
    res.json({ message: 'Active card type updated successfully' });
  } else {
    res.status(400).json({ error: 'Invalid card type' });
  }
};