import React from 'react'
import './header.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect,useState } from 'react';
import { Grid } from '@mui/material';
import image2 from '../image/2.png'
import banner_image from "../../assets/banner_image.gif";
import torch from "../../assets/torch.gif"
import images from '../image/1.gif'
import prizepodium from "../../assets/prizepodium.gif"

import Aos from 'aos'
import "aos/dist/aos.css"

const Header = () => {
  
  useEffect(()=>{
    Aos.init({ duration: 2000 });
  },[]);
  return (
    <div className='header section__padding ' id="Home">
      
      <div className="header-content ">
        
        <div className='leftsidebanner'>
          <h1 data-aos="flip-right">Social And Entertainment Super Platform</h1>
          <h2 data-aos="flip-right">Socio-Club</h2>
          <p data-aos="flip-right">Sink Yourself Into Vibes</p>
        </div>
        
        <div data-aos="zoom-out" className='banner'>
          <img src={banner_image}  alt="heloo" />
          </div>


          {/* <img className='shake-vertical' src={torch} alt="" /> */}
      </div>
      
      <div className="header-slider">
        <Grid container>
        <Grid item md={1}/>

        <Grid item md={4} xs={12}>
        <div data-aos="slide-right" className='trophy'>
          <img src={prizepodium}  alt="heloo" className='rounded' />
        </div>
          </Grid>
          <Grid item md={5} xs={12} className='contests-p'>
            
        <p data-aos="slide-up" className='text-center'>Contests on memes, contests on reels, contests on everything. <br/> Participate in Contests for Free and win rewards</p>
            </Grid>
          </Grid>
         
      </div>
      <div data-aos="zoom-in-up" className='googleplay'>
        <p>Get in on Google Playstore</p>
        <img src={image2} href="#"className='gpay-anime' alt='Playstore' />
        </div>
    </div>
    
  )
}

export default Header
