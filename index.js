const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const express_handlebars = require('express-handlebars');

app.engine('.hbs', express_handlebars.engine({
    layoutsDir: __dirname + "/views/layouts",
    extname: '.hbs',
    defaultLayout: 'layout'
}));

app.set('view engine', '.hbs');

app.set('views', './views');

app.use(express.static(__dirname + "/public"));

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.render("index");
})

// app.use('/task1', require('./routes/task1'));
// app.use('/task2', require('./routes/task2'));
// app.use('/task3', require('./routes/task3'));
app.use('/task4', require('./routes/task4'));

