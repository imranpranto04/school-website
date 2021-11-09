import React from "react";
import bgFooter from "../../images/bg-footer.png";
import logo from "../../images/logo.png";
import map from "../../images/map.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import "./Footer.css";

const Footer = () => {
  return (
    <section className="container-fluid">
      <div className="mt-4">
        <img className="img-fluid w-100" src={bgFooter} alt="" />
      </div>
      <div className="footer">

        <div className="container">
        <div className="footer-card">
          <div className="row">
            <div className="col-md-4 col-sm-12 mt-4 p-2 mb-4">
                <p>Contact Us</p>
                <img className="img-fluid w-75 logoImg" src={logo} alt="" />
                <li>+880 198634912846, 038980398</li>
                <li>info@educationschool.edu.bd</li>
                <li>Dhaka, Bangladesh</li>
            </div>

            <div className="col-md-4 col-sm-12 mt-4 p-2 mb-4">
                <p>Important Links</p>
                
                <li><a href="#">Dhaka Education Board</a></li>
                <li><a href="#">Ministry of Education</a></li>               
                <li><a href="#">Bangladesh Primary Education</a></li>
                <li><a href="#">Ministry of Health</a></li>
                <li><a href="#">Idea Solution Ltd.</a></li>

            </div>

            <div className="col-md-4 col-sm-12 mt-4 p-2 mb-4">
                <p>Google Map</p>
                <img className="img-fluid map" src={map} alt="" />
                
            </div>

          </div>
          </div>

            <div className="d-flex justify-content-between footer-copyright ">

                <div>
                    <p>Copyright @ 2021, All Right Reserved by - Idea Solution Ltd.</p>
                </div>
                <div className="icon">
                    <a href=""><FontAwesomeIcon  icon={faFacebook} className="fa-2x"/></a>
                    <a href=""><FontAwesomeIcon icon={faTwitter} className="fa-2x"/></a>
                    <a href=""><FontAwesomeIcon icon={faWhatsapp} className="fa-2x"/></a>

                </div>
            </div>

        </div>
    
      </div>
    </section>
  );
};

export default Footer;
