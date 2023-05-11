const express = require('express');
const router=  express.Router();

const {emotions} = require("../data");

router.get("/", (req, res) => {
    res.render("task1", {
        emotions: emotions
    })
});

module.exports = router;