//MODULES
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 8000;

// APP SETUP
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//ROUTES
const apartmentsRouter = require('./routes/apartment');

// APP ROUTES
app.use("/", apartmentsRouter);





app.listen(PORT, () => {
    console.log("Server is running.");
});







