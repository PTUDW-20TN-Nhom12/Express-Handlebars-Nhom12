const express = require('express');
const router=  express.Router();

const {emotions} = require("../data");

router.get("/", (req, res) => {
    res.render("task1", {
        emotions: emotions,
        quotePath: '/task1/default.jpg'
    })
});


router.get("/:emotion", (req, res) => {
    let x = req.params.emotion;

    const i = emotions.findIndex(e => e.title == x);

    x = emotions[i].quotePath;
    res.render("task1", {
        emotions: emotions,
        quotePath: x
    })
})

module.exports = router;