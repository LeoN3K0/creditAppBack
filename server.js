const express = require('express');
const app = express();
const port = 8082;

const controllers = require('./controllers');

app.use(express.json());


app.use('/api', controllers);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});