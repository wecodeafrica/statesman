const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/forgot', (req, res) => {
    res.render('forgot');
});

app.get('/login', ( req, res) => {
    res.render('login')
})


app.listen(port, () => console.log(`server is listening on ${port}`));