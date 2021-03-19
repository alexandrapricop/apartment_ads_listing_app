import React from 'react';
import Slider from "react-slick";

const CardImage = (props) => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const images = props.images;

    console.log(images.length);

    function sliderContents() {
        return images.map((item, index) => 
        (   <div className="slide"> 
                <div key={index} className="image" style={{backgroundImage: `url(${item})` }}></div>
            </div>
        )
        );
    }

    if(images.length <= 1) {
        return (
            <div className="image" style={{backgroundImage: `url(${images[0]})` }}></div>
        );
    } else {
        return (
            <Slider {...settings}> 
                {sliderContents()}
            </Slider>
        );
    }


}

export default CardImage;
