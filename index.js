require('./config/config');

var express = require('express');
var bodyParser = require('body-parser');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./swagger');

var _ = require('lodash');

const port = process.env.PORT;

var app = express();
app.use(bodyParser.json());

app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocument));

app.get('/api-spec', async (req, res) => {

  res.send(swaggerDocument);
});

app.get('/api/contact', async (req, res) => {

  const obj = {
    name: 'Kazım Etiksan',
    age: 39,
    city: 'İstanbul',
    contact: {
      email: 'kazim@pikselmutfak.com',
      phone: '+905324871200'
    }
  }
  res.send(obj);
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
