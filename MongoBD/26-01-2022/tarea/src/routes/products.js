const { Router } = require('express');

const router = Router();

const Product = require('../models/products');

router.get('/products', async (req, res) => {
    const limit = parseInt(req.query.limit, 10) || 3;
    const page = parseInt(req.query.limit, 10) || 5;
    const products = await Product.paginate({}, {limit, page});
    res.json(products);
});

router.post('/products', async (req, res) => {
    console.log(req.body);

    const newProduct = new Product(req.body);
    const saveProduct = await newProduct.save();
    res.send(saveProduct);
});

module.exports = router;