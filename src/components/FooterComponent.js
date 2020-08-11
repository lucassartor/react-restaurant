import React from "react";
import {Link} from "react-router-dom";

function Footer() {
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4  col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home" className="link">Home</Link></li>
                            <li><Link to="/aboutus" className="link">About</Link></li>
                            <li><Link to="/menu" className="link">Menu</Link></li>
                            <li><Link to="/contactus" className="link">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-4 col-sm-2 text-center">
                        <h5>Contact</h5>
                        <div className="text-center">
                            <a href="https://linkedin.com/in/lucas-sartor-chauvin-8a5a501aa/"><i className="fa fa-linkedin fa-lg link mr-4"/></a>
                            <a href="https://twitter.com/lucassartz"><i className="fa fa-twitter fa-lg link"/></a>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>Made with <i className="fa fa-heart text-danger"/> by <a href="https://github.com/lucassartor" className="link">Lucas Sartor</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;