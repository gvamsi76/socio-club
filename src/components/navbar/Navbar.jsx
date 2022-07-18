import React,{ useEffect} from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos'
import "aos/dist/aos.css"
import {useNavigate} from "react-router-dom"


 const Navbar = () => {
  const navigate=useNavigate();
  useEffect(()=>{
    Aos.init({ duration: 2000 });
  },[]);


  return (
    <div className='navbar1'>
      <div className="navbar-links row">
          <nav className="navbar navbar-expand-lg dark m-3 mt-0 pt-0">
          <div data-aos="slide-right" className="navbar-links_logo col-lg-3 col-sm-10 col-10 d-block mx-auto">
            <img src={logo} alt="socio club" className='d-block mx-auto' />
          </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <FontAwesomeIcon icon={faBars} className='text-white' />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav row container">
                <li data-aos="zoom-in" className="nav-item col text-center mt-2 mx-auto">
                <Link onClick={()=>navigate("/")} to="Home" spy={true} smooth={true} className='text-white display-6 opensans pointer text-center' >Home</Link>
                </li>
                <li data-aos="zoom-in" className="nav-item col text-center mt-2  mx-auto">
                <Link onClick={()=>navigate("/")} to="Features" spy={true} smooth={true} className='text-white display-6 opensans pointer text-center' >Features</Link>
                </li>
                <li data-aos="zoom-in" className="nav-item col text-center mt-2  mx-auto">
                <Link onClick={()=>navigate("/About")} to="About" spy={true} smooth={true} className='text-white display-6 opensans pointer text-center' >About</Link>
                </li>
                <li data-aos="zoom-in" className="nav-item col text-center mt-2 mx-auto">
                <Link  to="Contact" spy={true} smooth={true} className='text-white display-6 opensans pointer text-center' >Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
      </div>
    </div>
  )
}

export default Navbar
