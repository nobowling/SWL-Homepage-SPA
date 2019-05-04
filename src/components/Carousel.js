import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://thehappypuppysite.com/wp-content/uploads/2018/05/shiba-inu-header.jpg" />
                    <p className="legend">Shiba Inu 1</p>
                </div>
                <div>
                    <img src="http://static.ddmcdn.com/en-us/apl/breedselector/images/breed-selector/dogs/breeds/shiba-inu_01_lg.jpg" />
                    <p className="legend">Shiba Inu 2</p>
                </div>
                <div>
                    <img src="http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Shiba-Inu-2.jpg" />
                    <p className="legend">Shiba Inu 3</p>
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel