const Apartment = require('../models/apartment');
const fs = require('fs');
const path = require('path');
const dataPath = path.dirname(require.main.filename)+"/data.json";

const saveApartment = (req, res) => {
    body = req.body;

    const {title, description, rooms, address, phone, images=[], price} = body;
    const apartment = new Apartment(title, description, rooms, address, phone, images, price);
    
    req.files.forEach( (item) => {
        let imagePath = "http://localhost:8000" + "/images/" + item.filename;
        images.push(imagePath);
    })

    apartment.images = images;
    console.log(body)

    try {
        fs.readFile(dataPath, (err, data) => {

        if(data.length!=0) {
            let apartments = JSON.parse(data);
            apartments.push(apartment);
            fs.writeFileSync(dataPath, JSON.stringify(apartments))
        } else {
            console.log(2);
            let apartments = [];
            apartments.push(apartment);
            fs.writeFileSync(dataPath, JSON.stringify(apartments))
        }

        });
    } catch (err) {
        console.error("Error while reading data:", err)
    }

};

const getApartments = (req, res) => {

    try {
        fs.readFile(dataPath, (err, data) => {
            if(data.length!=0){
                res.send(JSON.parse(data))
            } else {
                res.send(null)
            }
        });
    } catch (err) {
        console.error("Error while reading data:", err)
    }

};

module.exports = {saveApartment, getApartments};


