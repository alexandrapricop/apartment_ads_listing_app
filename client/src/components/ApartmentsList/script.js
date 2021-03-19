import React from 'react';
import Card from '../Card/script';


const ApartmentsList = (props) => {
    var apartmentsArray = props.data;

    return apartmentsArray.map( (item, index) => <Card key={{index}} data={{...item}} />);
}

export default ApartmentsList;
