const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');

// define route for trips endpoint
router.route("/trips").get(tripsController.tripsList);
// define route for tripsFindByCode
// * params: tripCode
router.route("/trips/:tripCode").get(tripsController.tripsFindByCode);

module.exports = router;