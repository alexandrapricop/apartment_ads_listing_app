import React from 'react';
import CardImage from '../CardImage/script';

const Card = (props) => {

    const {title, description, numberOfRooms, address, phone, price, images} = props.data;

    return (

        <div className="card--wrap">
            <div className="card">
                <CardImage images={images} />
                <div className="text"> 
                    <h2> { title } </h2>
                    <p> { description } </p>
                    <ul>
                        <li> Numar camere <span> { numberOfRooms } </span></li>
                        <li> Zona <span> { address } </span></li>
                        <li> Pret <span> { price } euro / luna </span></li>
                        <li> Numar telefon <span> { phone } </span></li>
                    </ul>
                </div>
                <a className="btn btn--yellow"> VEZI DETALII</a>
            </div>
        </div>
    );
}

export default Card;
