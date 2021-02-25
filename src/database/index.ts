import { Mongoose } from 'mongoose'; 

const mongoose = new Mongoose(); 
const connStr = 'mongodb+srv://bruno:9VoiG5869Du6y0QN@development.ruldj.mongodb.net/node-chat?retryWrites=true&w=majority';

mongoose
	.connect(connStr, { useNewUrlParser: true })
	.then(conn => {
		console.log('DB Connection Stablished!')
	});
