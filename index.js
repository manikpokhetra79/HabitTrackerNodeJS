const express = require('express');
const port = process.env.PORT;
const cors = require('cors');
const app = express();
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.use(express.urlencoded());
//serve static files
app.use(express.static('assets'));
//set up view engine
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', './views');
//use cors module
app.use(cors());
app.use('/', require('./routes'));
//listen to server
app.listen(port, (err) => {
  if (err) {
    console.log('Server Error', err);
    return;
  }
  console.log(`Successfully connected to server at port:: ${port}`);
});
