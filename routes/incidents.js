const express = require('express');
const router = express.Router();
const {
  getAllIncidents,
  createIncident,
  getIncident,
  updateIncident,
  deleteIncident
} = require('../controllers/incidents');

router.route('/')
  .get(getAllIncidents)
  .post(createIncident);

router.route('/:id')
  .get(getIncident)
  .put(updateIncident)
  .delete(deleteIncident);

module.exports = router;