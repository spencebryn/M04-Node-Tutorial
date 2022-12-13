const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const blogRoutes = require('./routes/blogRoutes');
const { render } = require('ejs');
const dbURI = 'mongodb+srv://admin:11037@nodetuts.3eo4zkr.mongodb.net/nodetuts?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => {
        app.listen(3000)
    })
    .catch((err) => {
        console.log(err)
    })

const app = express();
app.set('view engine', 'ejs')



app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));


app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.use('/blogs', blogRoutes);

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});




app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
});