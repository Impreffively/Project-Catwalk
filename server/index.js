const express = require('express');
const axios = require('axios');
const overview = require('./Overview/api.js');
const relatedProducts = require('./RelatedProducts/api.js');
const qa = require('./QA/api.js');
const reviews = require('./Reviews/api.js');
//const api = require('../Reviews/api.js')


const app = express();
const PORT = 3000;

app.use(express.static('client/public'));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

app.get('/reviews', (req, res) => {
  reviews.getReviews(req.query.product_id)
      .then((data) => {
        res.status(200).send(data.data);
      })
      .catch((err) => {
        res.status(404).send(err)
      })
})

app.get('/products', (req, res) => {
  overview.getProducts()
      .then((data) => {
          // console.log(data);
          res.status(200).send(data.data);
      })
      .catch((err) => {
        console.log(err)
          res.status(404).send(err);
      })
})




app.get('./GET/qa/questions', (req, res) => {
  console.log('Q and A', req.body);
  var {id} = req.body;
  qa.getQuestions(id)
    .then((data) => {
      res.send(data); //.status.(404)
    })
    .catch((err) => {
      res.send(err); //.status.(404)
    })
})

