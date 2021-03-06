const express = require('express');
const compression = require('compression');
const axios = require('axios');

const relatedProducts = require('./RelatedProducts/api.js');
const qa = require('./QA/api.js');
const reviews = require('./Reviews/api.js');

const app = express();
const PORT = 3000;

app.use(compression());

app.use(express.static('client/public'));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

app.get('/reviews', (req, res) => {
  var id = req.query.product_id;
  reviews.getReviews(id)
    .then((data) => {
      res.status(200).send(data.data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.get('/reviews/meta', (req, res) => {
  var id = req.query.product_id;
  reviews.getMetaReviews(id)
    .then((data) => {
      res.status(200).send(data.data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.put('/reviews/:review_id/helpful', (req, res) => {
  var review_id = req.params.review_id;
  reviews.putHelpfullness(review_id)
    .then((data) => {
      res.status(200).send(data.data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.put('/reviews/:review_id/report', (req, res) => {
  var review_id = req.params.review_id;
  reviews.putReport(review_id)
    .then((data) => {
      res.status(200).send(data.data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});


app.get('/products/:id', (req, res) => {
  var {id} = req.params;

  relatedProducts.getProducts(id)
    .then(({data}) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send(err);
    });
});

app.get('/related/:id', (req, res) => {
  //console.log('Related Products', req.params);
  var {id} = req.params;

  relatedProducts.getRelated(id)
    .then(({data}) => {
      //console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.get('/related/stars/:id', (req, res) => {
  //console.log('Related Products', req.params);
  var {id} = req.params;

  relatedProducts.getMetaReviews(id)
    .then(({data}) => {
      //console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    })
})

app.get('/styles/:id', (req, res) => {
  //console.log('Related Products', req.params);
  var {id} = req.params;

  relatedProducts.getStyles(id)
    .then(({data}) => {

      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});


app.get('/qa/questions/:id', (req, res) => {
  var {id} = req.params;
  //console.log(id);
  qa.getQuestions(id)
    .then(({data}) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send(err);
    });
});

