const  { 
  emotions,
  categories, 
  products ,
  zodiacs 
} = require('./data.js');

const fs = require('fs');

const express = require('express');
const app = express();
const express_handlebars = require('express-handlebars');

app.engine('.hbs', express_handlebars.engine({
    layoutsDir: __dirname + "/views",
    extname: '.hbs',
    defaultLayout: 'layout'
}));
app.set('view engine', '.hbs');
app.set('views', './views');


app.use(express.static(__dirname + "/public"));

app.listen(() => {
    // if(err) console.log(err);
    console.log('listening on 9000');
}, port=9000);

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/task1", (req, res) => {
    
});
app.get("/task2", (req, res) => {

});
app.get("/task3", (req, res) => {

});
app.get("/task4", (req, res) => {

});

