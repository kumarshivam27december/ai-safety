require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();
connectDB();
app.use(bodyparser.json());
app.use(cors());

app.get('/',(req,res)=>{
	res.send('AI Safety Incident Log API');
});
app.get('/api/incidents',(req,res)=>{
	res.json([
		{
			id:1,
			titile:'Test Incident',
			description:'This is a test',
			severity:'Low'
		}
	]);
});
const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
	console.log(`server is running on port ${PORT}`);
});

