const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./routes/AuthRouter');
const AppRouter = require('./routes/AppRouter');


const cool = require('cool-ascii-faces');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    // .get('/', (req, res) => res.render('pages/index'))
    .get('/cool', (req, res) => res.send(cool()))
    .listen(PORT, () => console.log(`Listening on ${PORT}`));


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.json({ message: 'Server Works!' }));
app.use('/api', AppRouter);
app.use('/auth', AuthRouter);
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`));

//Hi this is katie and Randall!!
