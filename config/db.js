const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async() =>{
	try{
		await mongoose.connect(process.env.MONGO_URI,{
			useNewURLParser:true,
			useUnifiedTopolog:true,
		});
		console.log('mongodb is connected successfully');
	}catch(err){
		console.error('mongodb connection err',err);
		process.exit(1);
	}
};
module.exports = connectDB;

