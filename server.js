const express = require('express'),
    app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', (req, res) => {
    res.render('content');
});

app.get('/auth/google', (req, res) => {
    if (req.query.password === 'filmweb') {
        res.render('auth', {
            url: 'http://www.filmweb.pl/'
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
        .send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});