const Habit = require('../models/habitModel');
//controller for habitspage
module.exports.habitsPage = (req, res) => {
  Habit.find({}, (err, habits) => {
    return res.render('dashboard', {
      title: 'Add Habits',
      habits: habits,
    });
  });
};
//create new habit.
module.exports.create = (req, res) => {
  let today = new Date();
  let date = today.getDate();
  Habit.create(
    {
      description: req.body.habit,
      creation_date: date,
      days: ['None', 'None', 'None', 'None', 'None', 'None', 'None'],
    },
    (err, habit) => {
      if (err) {
        console.log('Error while creating Habit', err);
        return res.redirect('back');
      }
      console.log(habit);
      return res.redirect('back');
    }
  );
};
module.exports.delete = (req, res) => {
  let id = req.params.id;
  Habit.findByIdAndDelete(id, function (err, habit) {
    if (err) {
      console.log('error in deleting from database');
      return res.redirect('back');
    }
    console.log('Successfully deleted Habit');
    return res.redirect('back');
  });
};
