const Habit = require('../models/habitModel');
//controller for habitspage
module.exports.habitsPage = (req, res) => {
  return res.render('dashboard', {
    title: 'Add Habits',
  });
};

//create new habit
