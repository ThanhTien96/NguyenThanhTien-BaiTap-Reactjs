import React from "react";
import Carousel from "./Carousel";
import Feature from "./Features";
import './Body.css';
import './global.css';


export default class Body extends React.Component{

    render() {
        return(
            <div className="body">
                <div className="container">
                    <Carousel />
                    <div className="feature">
                    <Feature />
            
                    </div>
                </div>
            </div>
        );
    }
}