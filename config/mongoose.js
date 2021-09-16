const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/habit_tracker');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB Error'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
