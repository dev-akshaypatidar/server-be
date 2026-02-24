var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connectDB = require('./config/db');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/userRoutes');
var orderRoutes = require('./routes/orderRoutes');

var app = express();

connectDB();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/health', (req,res)=>{
    res.send({
        status:'OK',
        msg:'Server is running.... at 4000'
    })
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/orders', orderRoutes);



module.exports = app;
