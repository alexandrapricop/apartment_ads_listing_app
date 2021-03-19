const express = require('express');
const cors = require('cors');
const apartmentsRouter = express.Router();
const multer = require('multer');
const path = require('path');
const uploadsPath = path.dirname(require.main.filename)+"/public/images";
var storage = multer.diskStorage({
    destination: uploadsPath,
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
  })

const upload = multer({ storage: storage});

const Apartment = require('../controllers/apartment');

const saveApartment = Apartment.saveApartment;
const getApartments = Apartment.getApartments;

// POST
apartmentsRouter.post('/add-apartment', upload.array("images"),saveApartment);

// GET
apartmentsRouter.get('/get-apartments',getApartments);

module.exports = apartmentsRouter;
