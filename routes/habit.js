const express = require('express');
const router = express.Router();
const habitsController = require('../controllers/habitsController');
//page route
router.get('/dashboard', habitsController.habitsPage);

//action route
router.post('/create', habitsController.create);
module.exports = router;
