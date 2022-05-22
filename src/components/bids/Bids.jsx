import React, { useEffect } from 'react'
import './bids.css'
import readingbook from '../../assets/readingbook.gif'
import audiobook from '../../assets/audiobook.gif'
import News from '../../assets/News.gif'
import Contest from '../../assets/Contest.gif'
import Crypto from '../../assets/Crypto.gif'
import Music from '../../assets/Music.gif'
import Radio from '../../assets/Radio.gif'
import Memes from '../../assets/Memes.gif'
import chatbot from '../../assets/chatbot.gif'
import Podcast from '../../assets/Podcast.gif'
import Anonymous from '../../assets/Anonymous.gif'
import videogamestreamer from '../../assets/videogamestreamer.gif'
import workout from '../../assets/workout.gif'
import quizbump from '../../assets/quizbump.gif'
import newyoga from '../../assets/newyoga.gif'
import marketing from '../../assets/marketing.gif'
import exchangecryptocurrency from '../../assets/exchangecryptocurrency.gif'
import gamepadanimation from '../../assets/gamepadanimation.gif'
import books from '../../assets/books.gif'
import globalnetwork from '../../assets/globalnetwork.gif'

import Aos from 'aos'
import "aos/dist/aos.css"

// import { Link } from 'react-router-dom';

const Bids = ({title}) => {
  useEffect(()=>{
    Aos.init({ duration: 2000 });
  },[]);


  return (
    <div className='bids section__padding' id="Features" >
      <div className="bids-container">
        <div data-aos="zoom-in" className="bids-container-text">
          <h1>Club Features</h1>
        </div>
        <div className="bids-container-card">


          <div className="card-column" >
            <div data-aos="fade-right" className="bids-card bg-white">
              <div className="bids-card-top">
                <img src={gamepadanimation} className="image-responsive" alt="Games" title='Play Games' />
              {/* <Link to={`/post/123`}> */}
              <h5 className="bids-title text-dark text-center fw-bolder mt-2">Games</h5>
              <div className='text-dark text-center texth'>Games club - <br/> Free games to play online! </div>
              {/* </Link> */}
              </div>
            </div>
          </div>
          <div className="card-column" >
            <div data-aos="fade-up" className="bids-card bg-white">
              <div className="bids-card-top " >
                <img src={books} className="image-responsive" alt="Books" title='Books' />
              {/* <Link to={`/post/123`}> */}
              <h5 className="bids-title text-dark text-center fw-bolder mt-2">Books</h5>
              <div className='text-dark text-center texth'>Books club - <br/> Free ebooks to read and download. Get Some stuff and Read the Books</div>
              {/* </Link> */}
              </div>
              
            </div>
          </div>
          <div className="card-column" >
            <div data-aos="fade-left" className="bids-card bg-white">
              <div className="bids-card-top">
                <img src={audiobook} className="image-responsive" alt="Audio Books" title='Audio Books' />
              {/* <Link to={`/post/123`}> */}
              <h5 className="bids-title text-dark text-center fw-bolder mt-2">Audio Books</h5>
              <div className='text-dark text-center texth'>Audio Books club - <br/> Audio books online. Very lazy to read the books,listen the books</div>
              {/* </Link> */}
              </div>
              
            </div>
          </div>
          <div className="card-column" >
            <div data-aos="fade-down" className="bids-card bg-white">
              <div className="bids-card-top">
                <img src={globalnetwork} className="image-responsive" alt="News" title='News' />
              {/* <Link to={`/post/123`}> */}
              <h5 className="bids-title text-dark text-center fw-bolder mt-2">News</h5>
              <div className='text-dark text-center texth'>News club - <br/> Daily Updated Real News</div>
              {/* </Link> */}
              </div>
             
            </div>
          </div>
          <div className="card-column" >
            <div data-aos="fade-right" className="bids-card bg-white">
              <div className="bids-card-top">
                <img src={Contest} className="image-responsive" alt="Contests" title='Contests' />
              {/* <Link to={`/post/123`}> */}
              <h5 className="bids-title text-dark text-center fw-bolder mt-2">Contests</h5>
              <div className='text-dark text-center texth'>Contests club - <br/> On Everything Participate and Win Rewards</div>
              {/* </Link> */}
              </div>
            
            </div>
          </div>
          <div className="card-column" >
            <div data-aos="fade-up" className="bids-card bg-white">
              <div className="bids-card-top">
                <img src={Crypto} className="image-responsive" alt="NFT's" title="NFT's" />
              {/* <Link to={`/post/123`}> */}
              <h5 className="bids-title text-dark text-center fw-bolder mt-2">NFT'S</h5>
              <div className='text-dark text-center texth'>Nft's club - <br/> Check Trending Nft's and Crypto Things</div>
              {/* </Link> */}
              </div>
            
            </div>
          </div>
          <div className="card-column" >
            <div data-aos="fade-left" className="bids-card bg-white">
              <div className="bids-card-top">
                <img src={Music} alt="Music" title='Music' />
              {/* <Link to={`/post/123`}> */}
              <h5 className="bids-title text-dark text-center fw-bolder mt-2">Music</h5>
              <div className='text-dark text-center texth'>Music club - <br/> Listen to free Music.</div>
              {/* </Link> */}
              </div>
           
            </div>
          </div>
          <div className="card-column" >
            <div data-aos="fade-down" className="bids-card bg-white">
              <div className="bids-card-top">
                <img src={Radio} alt="Radio" title='Radio' />
              {/* <Link to={`/post/123`}> */}
              <h5 className="bids-title text-dark text-center fw-bolder mt-2">Radio</h5>
              <div className='text-dark text-center texth'>Radio club - <br/> Listen to all Radio live stations free!</div>
              {/* </Link> */}
              </div>
            
            </div>
          </div>
          <div className="card-column" >
            <div data-aos="fade-right" className="bids-card bg-white">
              <div className="bids-card-top">
                <img src={chatbot} alt="Chatbot" title='Chatbot' />
              {/* <Link to={`/post/123`}> */}
              <h5 className="bids-title text-dark text-center fw-bolder mt-2">Chatbot</h5>
              <div className='text-dark text-center texth'>Chatbot club - <br/> Lucy Chat bot, which will entertain with voice and talks in chat</div>
              {/* </Link> */}
              </div>
             
            </div>
          </div>
          <div className="card-column" >
            <div data-aos="fade-up" className="bids-card bg-white">
              <div className="bids-card-top">
                <img src={Memes} alt="Memes" title='Memes' />
              {/* <Link to={`/post/123`}> */}
              <h5 className="bids-title text-dark text-center fw-bolder mt-2">Memes</h5>
              <div className='text-dark text-center texth'>Memes club - <br/> Explore all time best memes live.</div>
              {/* </Link> */}
              </div>
              
            </div>
          </div>
          <div className="card-column" >
            <div data-aos="fade-left" className="bids-card bg-white">
              <div className="bids-card-top">
                <img src={Podcast} alt="Podcasts" title="Podcasts" />
              {/* <Link to={`/post/123`}> */}
              <h5 className="bids-title text-dark text-center fw-bolder mt-2">Podcasts</h5>
              <div className='text-dark text-center texth'>Podcasts club - <br/> Listen to Podcasts All over the World</div>
              {/* </Link> */}
              </div>
              
            </div>
          </div>
          <div className="card-column" >
            <div data-aos="fade-down" className="bids-card bg-white">
              <div className="bids-card-top">
                <img src={Anonymous} alt="Anonymous" title='Anonymous' />
              {/* <Link to={`/post/123`}> */}
              <h5 className="bids-title text-dark text-center fw-bolder mt-2">Anonymous</h5>
              <div className='text-dark text-center texth'>Anonymous club - <br/> Anyone can Securely post anything, as truth as hard, as Anonymous person.</div>
              {/* </Link> */}
              </div>
             
            </div>
          </div>


          <div className="card-column" >
            <div data-aos="fade-right" className="bids-card bg-white">
              <div className="bids-card-top">
                <img src={videogamestreamer} alt="Gaming Videos" title='Gaming Videos' />
              {/* <Link to={`/post/123`}> */}
              <h5 className="bids-title text-dark text-center fw-bolder mt-2">Gaming Videos</h5>
              <div className='text-dark text-center texth'>Gaming Videos club - <br/> Watch all the Free Gaming Videos. </div>
              {/* </Link> */}
              </div>
             
            </div>
          </div>

          <div className="card-column" >
            <div data-aos="fade-up" className="bids-card bg-white">
              <div className="bids-card-top">
                <img src={workout} alt="Fitness" title='Fitness' />
              {/* <Link to={`/post/123`}> */}
              <h5 className="bids-title text-dark text-center fw-bolder mt-2">Fitness</h5>
              <div className='text-dark text-center texth'>Fitness club - <br/>Watch free live Exercises and do Workouts and Be Fit.</div>
              {/* </Link> */}
              </div>
            </div>
            </div>
              <div className="card-column" >
            <div data-aos="fade-left" className="bids-card bg-white">
              <div className="bids-card-top">
                <img src={quizbump} alt="Quiz" title='Quiz' />
              {/* <Link to={`/post/123`}> */}
              <h5 className="bids-title text-dark text-center fw-bolder mt-2">Quiz</h5>
              <div className='text-dark text-center texth'>Quiz club - <br/> Play and Participate in All Free Quizs</div>
              {/* </Link> */}
              </div>
             
            </div>
          </div>
          <div className="card-column" >
            <div data-aos="fade-down" className="bids-card bg-white">
              <div className="bids-card-top">
                <img src={newyoga} alt="Breathing" title='Breathing' />
              {/* <Link to={`/post/123`}> */}
              <h5 className="bids-title text-dark text-center fw-bolder mt-2">Breathing</h5>
              <div className='text-dark text-center texth'>Breathing club - <br/> Practice Breathing and Be Healthy </div>
              {/* </Link> */}
              </div>
            </div>
          </div>
          <div className="card-column" >
            <div data-aos="fade-right" className="bids-card bg-white">
              <div className="bids-card-top">
                <img src={marketing} alt="Marketing" title='Marketing' />
              {/* <Link to={`/post/123`}> */}
              <h5 className="bids-title text-dark text-center fw-bolder mt-2">Shop</h5>
              <div className='text-dark text-center texth'>Shopping club - <br/> Shop online everything. </div>
              {/* </Link> */}
              </div>
            </div>
          </div>
          <div className="card-column" >
            <div data-aos="fade-up" className="bids-card bg-white">
              <div className="bids-card-top">
                <img src={exchangecryptocurrency} alt="Exchange Cryptocurrency" title='Exchange Cryptocurrency' />
              {/* <Link to={`/post/123`}> */}
              <h5 className="bids-title text-dark text-center fw-bolder mt-2">Crypto</h5>
              <div className='text-dark text-center texth'>Crypto club - <br/> Check all live crypto prices. </div>
              {/* </Link> */}
              </div>
            </div>
          </div>





        </div>
      </div>
     </div>
  )
}

export default Bids
