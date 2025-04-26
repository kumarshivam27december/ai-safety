const express = require('express');
const {
	getIncidents,
	createIncident
} = require('../controllers/incidents');

const router = express.Router();
router.route('/')
	.get(getIncidents)
	.post(createIncident);

module.exports = router;

