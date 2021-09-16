const mongoose = require('mongoose');

const HabitSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  habitsCompleted: {
    type: Number,
    default: 0,
  },
  streak: {
    type: Number,
    default: 0,
  },
  creation_date: {
    type: Number,
  },
  days: [],
});

const Habit = mongoose.model('Habit', HabitSchema);

module.exports = Habit;
