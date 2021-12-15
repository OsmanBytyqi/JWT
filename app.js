const express = require('express');
const mongoose = require('mongoose');
const authRoutes=require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const {requireAuth,checkUser}=require('./middleware/authMiddleware.js');


const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');
const connstr = "mongodb+srv://osmani:osmani1.@mani.5y7yi.mongodb.net/node-auth?retryWrites=true&w=majority";

// database connection
// 
mongoose.connect(connstr, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .then(result=> console.log('your server is running at http://localhost:3000'))
  .catch(err => console.log(err));


// routes
app.get('*',checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies',requireAuth, (req, res) => res.render('smoothies'));


app.use(authRoutes);



