const express = require('express');
const hbs = require('hbs');

var app = express();
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));
// register a new global variable
// hbs.registerHelper('variableName, function')
hbs.registerHelper ('getDrink', (drink) => {
    return ('There is your ' + drink + ' dear');
})
//rendering a view
app.get('/', (req, res) => {
    res.render('home.hbs', {
        msgTitle: 'Dynamic generated title',
        welcomeMessage: 'Hello this is just a test to see whether my syntax is right',
        currentYear: new Date().getFullYear()
    });
});


app.get('/bad', (req, res) => {
    res.send({
        errorMessage:'Failed to retrieve the data'
    });
});

app.listen(3000);


app.get('/game', (req res) => {
    res.render('game.hbs', {
        gameType: 
    });
});