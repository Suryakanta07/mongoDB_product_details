const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// get a list of product from the database
router.get('/product',function(req,res,next){
    Product.find({}).then(function(product){
        res.send(product);
    }).catch(next);
});

// add a new product to database
router.post('/product',function(req,res,next){
    Product.create(req.body).then(function(product){
        res.send(product);
    }).catch(next);
});


module.exports = router;