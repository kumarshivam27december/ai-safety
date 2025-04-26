const mongoose = require('mongoose');
const IncidentSchema = new mongoose.Schema({
	title:{
		type:String,
		required:[true,'Please add a title'],
		trim:true,
		maxlength:[100,'Title cannot exceed 100 characters']
	},
	description:{
		type:String,
		required:[true,'Please add a description'],
		maxlength:[1000,'Description should be at most 1000 characters']
	},
	severity:{
		type:String,
		require:true,
		enum:['Low','Medium','High'],
		default:'Medium'
	},
	reported_at:{
		type:Date,
		default:Date.now
	}
});

module.exports = mongoose.model('Incident',IncidentSchema);

