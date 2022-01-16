const Router = require('express').Router();
const EventRouter = require('./EventRouter');

Router.use('/events', EventRouter);

module.exports = Router;
