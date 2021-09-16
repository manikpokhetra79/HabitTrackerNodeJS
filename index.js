const express = require('express');
const port = process.env.PORT;
const app = express();
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');

//set up view engine
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./routes'));
//listen to server
app.listen(port, (err) => {
  if (err) {
    console.log('Server Error', err);
    return;
  }
  console.log(`Successfully connected to server at port:: ${port}`);
});
