require('dotenv').config();
const express = require('express');
const path = require('path');
const controllers = require('./controllers.js');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

app.get('/batches', (req, res) => {
  controllers.getBatches(req, res);
});

app.post('/batches', (req, res) => {
  controllers.postBatches(req, res);
});

app.put('/batches/*/reviewed', (req, res) => {
  controllers.reviewed(req, res);
});

app.put('/batches/*/tested', (req, res) => {
  controllers.tested(req, res);
})

app.listen(process.env.PORT);
console.log(`listening at port http://localhost:${process.env.PORT}`);
