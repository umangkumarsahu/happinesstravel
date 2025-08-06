const express = require('express');
const router = express.Router();

// Example controller functions
const getHome = (req, res) => {
    res.send('Welcome to Happiness Plans!');
};

const getAbout = (req, res) => {
    res.send('About Happiness Plans');
};

const getServices = (req, res) => {
    res.send('Our Services');
};

const getDestinations = (req, res) => {
    res.send('Featured Destinations');
};

const postPlan = (req, res) => {
    const { name, email, destination, travelDate, description } = req.body;
    // Logic to handle trip planning
    res.send(`Trip planned for ${name} to ${destination} on ${travelDate}`);
};

const postContact = (req, res) => {
    const { name, email, message } = req.body;
    // Logic to handle contact form submission
    res.send(`Message received from ${name}`);
};

// Exporting the controller functions
module.exports = {
    getHome,
    getAbout,
    getServices,
    getDestinations,
    postPlan,
    postContact
};