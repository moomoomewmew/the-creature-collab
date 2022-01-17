const Router = require('express').Router();
const EventRouter = require('./EventRouter');
const UserRouter = require('./UserRouter');

Router.use('/events', EventRouter);
Router.use('/users', UserRouter);

module.exports = Router;
