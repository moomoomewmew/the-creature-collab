const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./routes/AuthRouter');
const AppRouter = require('./routes/AppRouter');


const cool = require('cool-ascii-faces');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.json({ message: 'Server Works!' }));
app.use('/api', AppRouter);
app.use('/auth', AuthRouter);
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`));

//Hi this is katie and Randall!!
