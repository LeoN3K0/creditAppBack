const express = require('express');
const cors = require('cors');
const app = express();
const port = 8082;

const controllers = require('./controllers');

app.use(express.json());

app.use(cors());


app.use('/api', controllers);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});