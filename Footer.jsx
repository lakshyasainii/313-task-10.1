import React from "react";
import facebook from "./images/facebook.png";
import twitter from "./images/twitter.png";
import instagram from "./images/instagram.png";
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-div container-fluid'>
            <div className="row footer-row">
                <div className='col-sm-4'>
                    <h4>Explore</h4>
                    <p>
                        <a href="#">Home</a><br />
                        <a href="#">Questions</a><br />
                        <a href="#">Articles</a><br />
                        <a href="#">Tutorials</a>
                    </p>
                </div>
                <div className='col-sm-4 text-center'>
                    <h4>Support</h4>
                    <p>
                        <a href="#">FAQ's</a><br />
                        <a href="#">Help</a><br />
                        <a href="#">Contact US</a>
                    </p>
                </div>
                <div className='col-sm-4 text-right'>
                    <h4>Stay Connected</h4>
                    <a href="https://www.facebook.com/"><img className="social-image" src={facebook} alt="facebook" /></a>
                    <a href="https://www.twitter.com/"><img className="social-image" src={twitter} alt="twitter" /></a>
                    <a href="https://www.instagram.com/"><img className="social-image" src={instagram} alt="instagram" /></a>
                </div>
            </div>
            <br />
            <div className="centered-column">
                <h4>DEV@Deakin 2022</h4>
                <div className="d-flex justify-content-around">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms</a>
                    <a href="#">Code of Conduct</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
