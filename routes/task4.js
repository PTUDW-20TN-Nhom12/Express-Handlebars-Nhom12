const express = require('express'); 
const router = express.Router(); 

const { zodiacs } = require('../data'); 

router.get('/', (req, res) => { 
  res.render('task4', { zodiacs })
})

router.get('/:name', (req, res) => {
  const name = req.params.name; 
  const zodiac = zodiacs.filter((item) => item.name == name)[0];  
  res.render('task4-details', { zodiac })
})

module.exports = router; 