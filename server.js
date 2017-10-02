const express = require('express'),
    app = express();

app.set('view engine', 'pug');
app.set('views','./views');

console.log('Server running...');

app.get('/', (req, res) => {
    res.render('content');
});

app.get('/auth/google', (req, res) => {
    if (req.query.password === 'filmweb') {
        res.render('start', {
            name: "Filmweb'u",
            url: 'http://www.filmweb.pl/'
        });
    } else if (req.query.password === 'bbc6') {
        res.render('start', {
            name: 'BBC Radio 6 Music',
            url: 'https://www.bbc.co.uk/6music'
        });
    } else {
        res.render('error', {
            info: 'Nieprawidłowe dane wejściowe.',
            url: 'http://localhost:3000/'
        });
    }
});

app.listen(3000);

app.use((req, res, next) => {
    res.status(404)
        .render('no_response', {
            info: 'Wybacz, nie mogliśmy odnaleźć tego, czego żądasz...',
            url: 'http://localhost:3000/'
        });
});