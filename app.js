require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const incidents = require('./routes/incidents');
const app = express();
connectDB();
app.use(bodyparser.json());
app.use(cors());
app.get('/',(req,res)=>{
	res.status(200).json({
		status:'API is running',
		message:'AI Safety Incident Log API',
		timestamp: new Date().toISOString()
	});
});
app.use('/api/incidents',incidents);
app.use((req,res) => {
	res.status(404).json({error:'Endpoint not found'});
});

app.use((err,req,res,next) => {
	console.error(err.stack);
	res.status(500).json({error:'Something broke!'});
});


const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
	console.log(`server is running on port ${PORT}`);
});

