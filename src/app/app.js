////////////////////////////////////Setting up Express and Basic Routing
const express = require('express');
const app = express();
const port = 4200;
app.use(express.json());

app.get('/', (req, res) => {
  //res.status(404).send('Hello from Server');
  res.status(200).json({ mesage: 'Hello from Server Json', app: 'Calibrator' });
});

app.listen(port, () => {
  console.log(`Run on port ${port}`);
});

app.post('/', (req, res) => {
  res.send('You can post to this URL');
});