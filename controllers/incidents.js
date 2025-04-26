const { StatusCodes } = require('http-status-codes');
const Incident = require('../models/Incidents');

// @desc    Get all incidents
// @route   GET /api/incidents
// @access  Public
const getAllIncidents = async (req, res, next) => {  // Added next parameter
  try {
    const incidents = await Incident.find().sort('-reported_at');
    res.status(StatusCodes.OK).json({
      success: true,
      count: incidents.length,
      data: incidents
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Create new incident
// @route   POST /api/incidents
// @access  Public
const createIncident = async (req, res, next) => {
  try {
    const { title, description, severity } = req.body;
    
    const incident = await Incident.create({
      title,
      description,
      severity
    });

    res.status(StatusCodes.CREATED).json({
      success: true,
      data: incident
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single incident
// @route   GET /api/incidents/:id
// @access  Public
const getIncident = async (req, res, next) => {
  try {
    const incident = await Incident.findById(req.params.id);
    
    if (!incident) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: `No incident found with id ${req.params.id}`
      });
    }

    res.status(StatusCodes.OK).json({
      success: true,
      data: incident
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Update incident
// @route   PUT /api/incidents/:id
// @access  Public
const updateIncident = async (req, res, next) => {
  try {
    const incident = await Incident.findByIdAndUpdate(
      req.params.id,
      req.body,
      { 
        new: true, 
        runValidators: true 
      }
    );
    
    if (!incident) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: `No incident found with id ${req.params.id}`
      });
    }

    res.status(StatusCodes.OK).json({
      success: true,
      data: incident
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete incident
// @route   DELETE /api/incidents/:id
// @access  Public
const deleteIncident = async (req, res, next) => {
	try {
	  const incident = await Incident.findByIdAndDelete(req.params.id);
	  if (!incident) {
		return res.status(StatusCodes.NOT_FOUND).json({
		  success: false,
		  message: `No incident found with id ${req.params.id}`
		});
	  }
	  // 200 response with confirmation
	  res.status(StatusCodes.OK).json({  // ✅
		success: true,
		message: "Incident deleted successfully"
	  });
	} catch (err) {
	  next(err);
	}
};

module.exports = {
  getAllIncidents,
  createIncident,
  getIncident,
  updateIncident,  // Added to exports
  deleteIncident
};