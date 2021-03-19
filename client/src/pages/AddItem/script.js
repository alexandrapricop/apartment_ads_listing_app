import React from 'react';
import AddApartmentForm from '../../components/AddApartmentForm/script';
import formImage from '../../images/form.svg';

const AddItem = () => {
    return (
        <div className="page-add-item">
            <div className="container">
                <div className="content">
                        <AddApartmentForm />
                        <img src={formImage} />   
                </div>          
            </div>            
        </div>
    );
}

export default AddItem;
