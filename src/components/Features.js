import React from "react";
import "./Feature.css";

export default class Feature extends React.Component {


    render() {
        return (
            <div className="feature__item">
                <div className="feature__bg">

                        <div className="bg__color feature__icon">
                        <i className="fa fa-chalkboard"></i>
                        </div>
                        <h2>Fresh new layout</h2>
                        <p>With Bootstrap 5, we've created a fresh new layout for this template!</p>
    
                </div>

                <div className="feature__bg">

                        <div className="bg__color feature__icon">
                        <i className="fa fa-cloud-download-alt"></i>
                        </div>
                        <h2>Free to download</h2>
                        <p>As always, Start Bootstrap has a powerful collectin of free templates.</p>
    
                </div>

                <div className="feature__bg">
                   
                        <div className="bg__color feature__icon">
                        <i className="fa fa-address-card"></i>
                        </div>
                        <h2>Jumbotron hero header</h2>
                        <p>The heroic part of this template is the jumbotron hero header!</p>
                    
                </div>

                <div className="feature__bg">
                        <div className="bg__color feature__icon">
                        <i className="fab fa-bootstrap"></i>
                        </div>
                        <h2>Feature boxes</h2>
                        <p>We've created some custom feature boxes using Bootstrap icons!</p>

                </div>

                <div className="feature__bg">
                        <div className="bg__color feature__icon">
                        <i className="fa fa-code"></i>
                        </div>
                        <h2>Simple clean code</h2>
                        <p>We keep our dependencies up to date and squash bugs as they come!</p>

                </div>

                <div className="feature__bg">
                        <div className="bg__color feature__icon">
                        <i className="fa fa-check"></i>
                        </div>
                        <h2>Fresh new layout</h2>
                        <p>With Bootstrap 5, we've created a fresh new layout for this template!</p>

                </div>

        

            </div>
        );
    }
}