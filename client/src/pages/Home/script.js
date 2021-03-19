import React, { Component } from 'react'
import axios from 'axios';
import ApartmentsList from '../../components/ApartmentsList/script';
import heroImage from '../../images/home.svg';

export default class componentName extends Component {

    constructor(props) {
        super(props);

        this.state = {
            apartmentsArray: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8000/get-apartments')
        .then(res => {
            this.setState({apartmentsArray: res.data});
            console.log(res.data)
        })
    }

    render() {
        return (
            <div className="page-home">
                <div className="container">
                    <div className="content">
                        <h1>Locul unde iti gasesti noul acasa!</h1>
                        <div className="hero">
                            <img src={heroImage} />
                        </div> 
                            {this.state.apartmentsArray ? <div className="cards" > <ApartmentsList data={this.state.apartmentsArray}/></div> : <h2> Nu exista apartamente.</h2> }
                    </div>             
                </div>            
            </div>
        );
    }
}
