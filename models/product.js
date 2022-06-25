const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create products
const ProductSchema = new Schema({
    productName: {
        type: String,
    },
    price: {
        type: Integer
       
    }
    
});


const Product = mongoose.model('product',ProductSchema);

module.exports = Product;