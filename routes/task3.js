const express = require('express');
const router =  express.Router();

const {categories, products} = require("../data");

router.get("/", (req, res) => {
    let id = req.query.id;
    let display_products = [];
    if (id) {
        display_products = products.filter(item => item.category == parseInt(id));
    }
    else {
        display_products = products;
    }
    console.log(display_products);
    res.render("task3", {
        categories: categories,
        products: display_products,
    })
});

module.exports = router;