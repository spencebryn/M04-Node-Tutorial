const express = require('express');

const app = express();
app.set('view engine', 'ejs')

app.listen(3000);

app.get('/', (req, res) => {
    const blogs = [
        {title: 'The Batman Is The Best Movie This Year', snippet: 'This opinion is presented as fact'},
        {title: 'I Wish The Blue Jackets Were Playing Better', snippet: 'Sometimes it is really hard to be a Columbus fan.'},
        {title: 'RimWorld Is Addictive', snippet: 'There is just something about it where if I start playing I will be playing for 6 hours a day for the next month.'},
    ]
    // res.send('<p>home page</p>');
    res.render('index', {title: 'Home', blogs});
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create a new blog'});
})

app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
});