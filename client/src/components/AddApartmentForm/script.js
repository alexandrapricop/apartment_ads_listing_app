import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export default class AddApartmentForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: " ",
            description: " ",
            rooms: 0,
            address: " ",
            phone: " ",
            price: " ",
            images: null,
            formSent: false
        };
    }

    updateTitle = (e) => {
        const value = e.target.value;
        this.setState({title: value})
    }

    updateDescription = (e) => {
        const value = e.target.value;
        this.setState({description: value})
    }

    updateAddress = (e) => {
        const value = e.target.value;
        this.setState({address: value})
    }

    updateRooms = (e) => {
        const value = e.target.value;
        this.setState({rooms: value})
    }

    updatePhone = (e) => {
        const value = e.target.value;
        this.setState({phone: value})
    }

    updatePrice = (e) => {
        const value = e.target.value;
        this.setState({price: value})
    }

    updateImages = (e) => {
        this.setState({images: Array.from(e.target.files)});
        console.log(e.target.files);
    }

    sendForm = (e) => {
        //e.preventDefault();

        const {title, description, rooms, address, phone, price, images} = this.state;

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('rooms', rooms);
        formData.append('address', address);
        formData.append('phone', phone);
        formData.append('price', price);

        if(images != null) {
            images.forEach(img => {
                formData.append("images", img)
            })
        }

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        if(title && description && rooms && address && phone && price && images){
            axios.post("http://localhost:8000/add-apartment",
            formData, config).then((response)=> {
            console.log(response);
            this.setState({formSent: true});
  
            }).catch((error)=> {
                console.log("Error:", error);
            });
        } else {
            alert("Completeaza toate campurile inainte de a trimite.");
        }

    }

    render() {
        return (
            <form>
                <h1>Adauga Anunt</h1>
                <label htmlFor="title">Numele Anuntului</label>
                <input type="text" maxlength="150" id="title" onChange={this.updateTitle}/>
                <label htmlFor="description">Descrierea Anuntului</label>
                <textarea rows="5" id="description"  maxlength="500"  onChange={this.updateDescription}></textarea>
                <label htmlFor="rooms">Numarul de camere</label>
                <input type="number" min="1"  id="rooms" onChange={this.updateRooms}/>
                <label htmlFor="address">Adresa</label>
                <input type="text" id="address" onChange={this.updateAddress}/>
                <label min="0" htmlFor="address">Pret</label>
                <input type="number" id="price" onChange={this.updatePrice}/>
                <label htmlFor="phone">Telefon</label>
                <input type="tel" id="phone"  onChange={this.updatePhone}/>
                <label htmlFor="images">Imagini</label>
                <div class="input-file-cont">
                    <input type="file" id="images" multiple name="images[]" onChange={this.updateImages}/>
                    <div className="cover">
                    <span className="text">
                        {
                        this.state.images ? 
                        (this.state.images.map(item => <p> {item.name }</p>)  ): "Adauga Imagini"
                        }
                    </span> 
                    </div>
                </div>
                <button className="btn btn--yellow" onClick={this.sendForm}> Adauga Anunt </button>
            </form>
        );
    }
}

