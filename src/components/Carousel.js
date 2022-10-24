import React from "react";
import './global.css';
import './Carousel.css'

export default class Carousel extends React.Component {
    render() {
        return (
            <div className="carousel">
            
                <h1>A warm welcome!</h1>
                <p>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                <button className="carousel-btn">Call to action</button>


            </div>
        );
    }
} 