const express = require('express');
const dotenv = require('dotenv').config({path: 'config/.env'});
const morgan = require('morgan');
const cors = require('cors');
const database = require('./db/database');
const error = require('./middleware/error');
const path = require('path');

// Routers Path
const userRouter = require('./route/user');
const reviewRouter = require('./route/review');
const faqRouter = require('./route/faq');
const serviceRouter = require('./route/service');
const successRouter = require('./route/success');
const portfolioRouter = require('./route/portfolio');
const sliderRouter = require('./route/slider');
const teamRouter = require('./route/team');

// Create Server
const app = express();

// Use MiddleWare
app.use(morgan('dev'))
app.use(cors());
app.use(express.json())
// app.use(express.static(path.join(__dirname, '/')))

// Add Database
database();

// Route End Point
app.use('/api/v1/user', userRouter);
app.use('/api/v1/review', reviewRouter);
app.use('/api/v1/faq', faqRouter);
app.use('/api/v1/service', serviceRouter);
app.use('/api/v1/success', successRouter);
app.use('/api/v1/portfolio', portfolioRouter);
app.use('/api/v1/slider', sliderRouter);
app.use('/api/v1/team', teamRouter);

// Show Error Message
app.use(error);

//->Show UI...
if(process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req,  res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html' ))
	});
} else if(process.env.NODE_ENV === 'development') {
	app.get('/', (req, res) => {
		res.send('Hello, Developer...')
	});
}

// Listening Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
	if(err) {
		console.log(err);
	} else {
		console.log(`Server is running on http://localhost:${PORT}`);
	}
})