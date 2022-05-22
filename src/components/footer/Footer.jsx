import React from "react";
import "./footer.css";
import nftlogo from "../../assets/logo.png";
import { AiOutlineInstagram, AiFillLinkedin,AiFillFacebook,AiFillPhone,AiFillMail } from "react-icons/ai";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { useRef } from 'react';
import { Link } from "react-router-dom";

import { RiDiscordFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
const Footer = () => {


  return (
    <div className="footer section__padding" id="Contact">
      <div className="footer-links">
        <div className="footer-links_logo">
          <div className="logo-footer">
            <img src={nftlogo} alt="logo" />
          </div>
          {/* <div>
            <h3>Get the lastes Updates</h3>
          </div>
          <div>
            <input type="text" placeholder="Your Email" />
            <button>Email Me!</button>
          </div> */}
        </div>
        <div className="footer-links_div">
          <h4 style={{marginLeft:'26px'}}> Contact</h4>
         
          <a target="_blank" href="https://maps.app.goo.gl/MiCdb6VfxGiCgmW18"><p><AddLocationIcon style={{marginRight:'4px'}}/> Electronics City Phase 1, Bengaluru, Karnataka 560100</p></a>
          <a href="https://mail.google.com/mail/u/0/?fs=1&to=socioclubsc@gmail.com&tf=cm" target="_blank"><p style={{marginLeft:'4px'}}><AiFillMail style={{marginRight:'8px'}}/>socioclubsc@gmail.com</p></a>
        </div>
      </div>
      
      <div className="row justify-content-evenly">
      <p className="text-white text-center">© NoBall Entertainments Private Limited</p>
      <p className="text-center row">
        <Link className="col text-white text-decoration-underline" to="/privacy-policy">Privacy Policy</Link>
        <Link className="col text-white text-decoration-underline" to="/termsConditions">Terms and conditions</Link>
      </p>
      </div>
      <div className="footer-copyright">
        <div className="flex-icon">

          <div className="card-icon">
            <a target="_blank"
              style={{ display: "flex" }}
              href="https://www.linkedin.com/company/socioclub/"
            >
              <AiFillLinkedin
                size={25}
                color="white"
                className="footer-icon"
              />
              <h6 className="text-white my-auto">LinkedIn</h6>
            </a>
          </div>
          
          <div className="card-icon">
          
          <a target="_blank" style={{ display: "flex" }} href="https://instagram.com/socio__club?utm_medium=copy_link">
            <AiOutlineInstagram
              size={25}
              color="white"
              className="footer-icon"
            />
            <h6 className="text-white my-auto">Instagram</h6>
          </a>
          
          </div>
          <div className="card-icon">
          <a target="_blank" style={{ display: "flex" }} href="https://www.facebook.com/profile.php?id=100078175297249">
            <AiFillFacebook
              size={25}
              color="white"
              className="footer-icon"
            />
          </a>
          <h6 className="text-white my-auto">Facebook</h6>
            </div>
          {/* <AiFillFacebook size={25} color="white" className="footer-icon" /> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
