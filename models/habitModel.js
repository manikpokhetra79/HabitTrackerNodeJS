const mongoose = require('mongoose');

const HabitSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Number,
  },
  streak: {
    type: Number,
  },
  creation_date: {
    type: Number,
  },
  days: [],
});

const Habit = mongoose.model('Habit', HabitSchema);

module.exports = Habit;
