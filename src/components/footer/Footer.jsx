import React from "react";
import "./footer.css";
import nftlogo from "../../assets/logo.png";
import { AiOutlineInstagram, AiFillLinkedin,AiFillFacebook,AiFillPhone,AiFillMail,AiOutlineYoutube,AiOutlineTwitter } from "react-icons/ai";
import {BsPinterest} from 'react-icons/bs';
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
        <div className="footer-links_div" itemScope itemType="http://schema.org/Person">
          
          <h4 className="ms-4"> Contact</h4>
          <a itemProp="address" target="_blank" href="https://maps.app.goo.gl/SS9fkf3JKzbyQ1Qg8"><p><AddLocationIcon className="me-2"/> Koramangala, 5th block, Bangalore Karnataka</p></a>
          <a itemProp="email" href="https://mail.google.com/mail/u/0/?fs=1&to=socioclubsc@gmail.com&tf=cm" target="_blank"><p className="ms-1"><AiFillMail className="me-2"/>socioclubsc@gmail.com </p></a>
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
            <a target="_blank" className="d-flex" href="https://www.linkedin.com/company/socioclub/" rel="noopener noreference">
              <AiFillLinkedin
                size={25}
                color="white"
                className="footer-icon"
              />
              <h6 className="text-white my-auto">LinkedIn</h6>
            </a>
          </div>
          
          <div className="card-icon">
          
          <a target="_blank" className="d-flex" href="https://instagram.com/socio__club?utm_medium=copy_link" rel="noopener noreference">
            <AiOutlineInstagram
              size={25}
              color="white"
              className="footer-icon"
            />
            <h6 className="text-white my-auto">Instagram</h6>
          </a>
          
          </div>
          <div className="card-icon">
          <a target="_blank" className="d-flex" href="https://www.facebook.com/Socio-Club-102669199089556" rel="noopener noreference">
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

      <div className="footer-copyright1">
        <div className="flex-icon">

          <div className="card-icon">
            <a target="_blank" className="d-flex" href="https://www.youtube.com/channel/UCDgEYBxdVoiwzxR2VsxTZUA" rel="noopener noreference">
              <AiOutlineYoutube
                size={25}
                color="white"
                className="footer-icon"
              />
              <h6 className="text-white my-auto">YouTube</h6>
            </a>
          </div>
          
          <div className="card-icon">
          
          <a target="_blank" className="d-flex" href="https://twitter.com/Socio__Club" rel="noopener noreference">
            <AiOutlineTwitter
              size={25}
              color="white"
              className="footer-icon"
            />
            <h6 className="text-white my-auto">Twitter</h6>
          </a>
          
          </div>
          <div className="card-icon">
          <a target="_blank" className="d-flex" href="https://pin.it/7ve2zKB" rel="noopener noreference">
            <BsPinterest
              size={25}
              color="white"
              className="footer-icon"
            />
          </a>
          <h6 className="text-white my-auto">Pintrest</h6>
            </div>
          {/* <AiFillFacebook size={25} color="white" className="footer-icon" /> */}
        </div>


      </div>
    </div>
  );
};

export default Footer;
