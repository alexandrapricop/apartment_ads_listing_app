class Apartment{
    constructor(title, description, numberOfRooms, address, phone, images=[], price){
        this.id = Math.floor(Math.random() * 1000);
        this.title = title;
        this.description = description;
        this.numberOfRooms = numberOfRooms;
        this.address = address;
        this.phone = phone;
        this.images = images;
        this.price = price;
    }
}

module.exports = Apartment;