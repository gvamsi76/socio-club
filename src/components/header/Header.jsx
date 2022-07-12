/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import './header.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect,useState } from 'react';
import { Grid } from '@mui/material';
import image2 from '../image/2.png'
import banner_image from "../../assets/banner_image.webp";
import prizepodium from "../../assets/prizepodium.webp"

import Aos from 'aos'
import "aos/dist/aos.css"

const Header = () => {
  
  useEffect(()=>{
    Aos.init({ duration: 2000 });
  },[]);
  return (
    <div className='page'>
    <div className='header section__padding ' id="Home">
      
      <div className="header-content ">
        
        <div className='leftsidebanner'>
          <h1 data-aos="zoom-in-up">Social And Entertainment Super Platform</h1>
          <h2 data-aos="zoom-in-up">Socio-Club</h2>
          <p data-aos="flip-right">Sink Yourself Into Vibes</p>
        </div>
        
        <div data-aos="zoom-out" className='banner'>
          <img src={banner_image}  alt="Banner Image" title='Banner Image' />
        </div>


          {/* <img className='shake-vertical' src={torch} alt="" /> */}
      </div>
      
      <div className="header-slider">
      </div>
      <iframe className='ytl' data-aos="zoom-out" width="885" height="498" src="https://www.youtube.com/embed/HhDDiS_8J2Q?autoplay=1&loop=1&fs=0&color=white&controls=1&disablekb=1&playlist=HhDDiS_8J2Q" rel='noreference' allowFullScreen></iframe>
      <div className="header-slider1">
        <Grid container>
        <Grid item md={1}/>

        <Grid item md={4} xs={12}>
        <div data-aos="slide-right" className='trophy'>
          <img src={prizepodium}  alt="Prize podium" title="Prize podium" className='rounded' />
        </div>
          </Grid>
          <Grid item md={5} xs={12} className='contests-p'>
            
        <p data-aos="slide-up" className='text-center'>Contests on memes, contests on reels, contests on everything. <br/> Participate in Contests for Free and win rewards</p>
            </Grid>
          </Grid>
         
      </div>
      <div data-aos="zoom-in-up" className='googleplay'>
        <p>Get in on Google Playstore</p>
        <img src={image2} href="#"className='gpay-anime' alt='Playstore' title='Playstore' />
        </div>
    </div>
    <div id="splash">
        <div className="anim">
          <div id="loader">
            <svg version="1.1" width="60px" height="70px" viewBox="0 0 60 70">
              <defs>
                <filter id="f1" x="0" y="0">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
                </filter>
              </defs>
              <g id="airplane">
                <path fill="#fff" d="M0.677,20.977l4.355,1.631c0.281,0.104,0.579,0.162,0.88,0.16l9.76-0.004L30.46,41.58c0.27,0.34,0.679,0.545,1.112,0.541
                h1.87c0.992,0,1.676-0.992,1.322-1.918l-6.643-17.439l6.914,0.002l6.038,6.037c0.265,0.266,0.624,0.412,0.999,0.418l1.013-0.004
                c1.004-0.002,1.684-1.012,1.312-1.938l-2.911-7.277l2.912-7.278c0.372-0.928-0.313-1.941-1.313-1.938h1.017
                c-0.375,0-0.732,0.15-0.996,0.414l-6.039,6.039h-6.915l6.646-17.443c0.354-0.926-0.33-1.916-1.321-1.914l-1.87-0.004
                c-0.439,0.004-0.843,0.203-1.112,0.543L15.677,17.24l-9.765-0.002c-0.3,0.002-0.597,0.055-0.879,0.16L0.678,19.03
                C-0.225,19.36-0.228,20.637,0.677,20.977z" transform="translate(44,0) rotate(90 0 0)" />
              </g>
              <g id="shadow" transform="scale(.9)">
                <path fill="#000" fillOpacity="0.3" d="M0.677,20.977l4.355,1.631c0.281,0.104,0.579,0.162,0.88,0.16l9.76-0.004L30.46,41.58c0.27,0.34,0.679,0.545,1.112,0.541
                h1.87c0.992,0,1.676-0.992,1.322-1.918l-6.643-17.439l6.914,0.002l6.038,6.037c0.265,0.266,0.624,0.412,0.999,0.418l1.013-0.004
                c1.004-0.002,1.684-1.012,1.312-1.938l-2.911-7.277l2.912-7.278c0.372-0.928-0.313-1.941-1.313-1.938h1.017
                c-0.375,0-0.732,0.15-0.996,0.414l-6.039,6.039h-6.915l6.646-17.443c0.354-0.926-0.33-1.916-1.321-1.914l-1.87-0.004
                c-0.439,0.004-0.843,0.203-1.112,0.543L15.677,17.24l-9.765-0.002c-0.3,0.002-0.597,0.055-0.879,0.16L0.678,19.03
                C-0.225,19.36-0.228,20.637,0.677,20.977z" transform="translate(64,30) rotate(90 0 0)" filter="url(#f1)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
