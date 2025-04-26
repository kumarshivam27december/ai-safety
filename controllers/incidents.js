const Incident = require('../models/Incident');
const {validationResult} = require('express-validator');
exports.getIncidents = async(req,res) =>{
    try{
	const incidents = await Incident.find();
	res.status(200).json(incidents);
     }catch(err){
	res.status(500).json({error: 'Server error'});
     }
};

exports.createIncident = async (req,res) =>{
    try{
	const incident = await Incident.create(req.body);
	res.status(201).json(incident);
    }catch(err){
	if (err.name === 'ValidationError'){
		return res.status(400).json({error:err.message});
	}
	res.status(500).json({error:'Server error'});
}
};
