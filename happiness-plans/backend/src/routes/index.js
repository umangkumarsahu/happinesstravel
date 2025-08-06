const express = require('express');
const router = express.Router();
const { getHome, getAbout, getServices, getDestinations, getPlanner, getContact } = require('../controllers/index');

// Define routes
router.get('/', getHome);
router.get('/about', getAbout);
router.get('/services', getServices);
router.get('/destinations', getDestinations);
router.get('/planner', getPlanner);
router.get('/contact', getContact);

// Export the router
module.exports = router;