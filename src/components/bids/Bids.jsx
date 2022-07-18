import React, { useEffect } from "react";
import "./bids.css";
import audiobook from "../../club/audiobook.webp";
import Contest from "../../assets/Contest.webp";
import Crypto from "../../club/digital.webp";
import Music from "../../club/music-note.webp";
import Radio from "../../club/radio.webp";
import Memes from "../../assets/Memes.webp";
import chatbot from "../../club/chatbot.webp";
import Podcast from "../../club/live.webp";
import Anonymousw from "../../club/anonymous.webp";
import videogamestreamer from "../../club/movie.webp";
import workout from "../../club/fitness.webp";
import quizbump from "../../club/quiz.webp";
import newyoga from "../../club/lotus.webp";
import marketing from "../../club/shopping-cart.webp";
import exchangecryptocurrency from "../../club/cryptocurrency.webp";
import gamepadanimation from "../../club/game-console.webp";
import books from "../../club/audio-book.webp";
import globalnetwork from "../../club/news.webp";

import Aos from "aos";
import "aos/dist/aos.css";

// import { Link } from 'react-router-dom';

const Bids = ({ title }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="bids section__padding" id="Features">
      <div className="bids-container">
        <div data-aos="zoom-in" className="bids-container-text">
          {/*<h1>Club Features</h1>*/}
          <p className="fw-bolder display-4 text-center">Club Features</p><br />
        </div>
        <div className="bids-container-card">
          <div className="card-column">
            <div data-aos="fade-right" className="bids-card bg-white">
              <div className="bids-card-top">
                <img
                  src={gamepadanimation}
                  className="image-responsive"
                  alt="Games"
                  title="Play Games"
                />
                {/* <Link to={`/post/123`}> */}
                <h5 className="bids-title text-dark text-center fw-bolder mt-2">
                  Games
                </h5>
                <div className="text-dark text-center texth">
                  Games club - <br /><h6> Free games to play online!{" "}</h6>
                </div>
                {/* </Link> */}
              </div>
            </div>
          </div>
          <div className="card-column">
            <div data-aos="fade-up" className="bids-card bg-white">
              <div className="bids-card-top ">
                <img
                  src={books}
                  className="image-responsive"
                  alt="Books"
                  title="Books"
                />
                {/* <Link to={`/post/123`}> */}
                <h5 className="bids-title text-dark text-center fw-bolder mt-2">
                  Books
                </h5>
                <div className="text-dark text-center texth">
                  Books club - <br /><h6> Free ebooks to read and download. Get Some
                  stuff and Read the Books</h6>
                </div>
                {/* </Link> */}
              </div>
            </div>
          </div>
          <div className="card-column">
            <div data-aos="fade-left" className="bids-card bg-white">
              <div className="bids-card-top">
                <img
                  src={audiobook}
                  className="image-responsive"
                  alt="Audio Books"
                  title="Audio Books"
                />
                {/* <Link to={`/post/123`}> */}
                <h5 className="bids-title text-dark text-center fw-bolder mt-2">
                  Audio Books
                </h5>
                <div className="text-dark text-center texth">
                  Audio Books club - <br /><h6> Audio books online. Very lazy to
                  read the books,listen the books</h6>
                </div>
                {/* </Link> */}
              </div>
            </div>
          </div>
          <div className="card-column">
            <div data-aos="fade-down" className="bids-card bg-white">
              <div className="bids-card-top">
                <img
                  src={globalnetwork}
                  className="image-responsive"
                  alt="News"
                  title="News"
                />
                {/* <Link to={`/post/123`}> */}
                <h5 className="bids-title text-dark text-center fw-bolder mt-2">
                  News
                </h5>
                <div className="text-dark text-center texth">
                  News club - <br /><h6> Daily Updated Real News</h6>
                </div>
                {/* </Link> */}
              </div>
            </div>
          </div>
          <div className="card-column">
            <div data-aos="fade-right" className="bids-card bg-white">
              <div className="bids-card-top">
                <img
                  src={Contest}
                  className="image-responsive"
                  alt="Contests"
                  title="Contests"
                />
                {/* <Link to={`/post/123`}> */}
                <h5 className="bids-title text-dark text-center fw-bolder mt-2">
                  Contests
                </h5>
                <div className="text-dark text-center texth">
                  Contests club - <br /><h6> On Everything Participate and Win</h6>
                  Rewards
                </div>
                {/* </Link> */}
              </div>
            </div>
          </div>
          <div className="card-column">
            <div data-aos="fade-up" className="bids-card bg-white">
              <div className="bids-card-top">
                <img
                  src={Crypto}
                  className="image-responsive"
                  alt="NFT's"
                  title="NFT's"
                />
                {/* <Link to={`/post/123`}> */}
                <h5 className="bids-title text-dark text-center fw-bolder mt-2">
                  NFT'S
                </h5>
                <div className="text-dark text-center texth">
                  Nft's club - <br /><h6> Check Trending Nft's and Crypto Things</h6>
                </div>
                {/* </Link> */}
              </div>
            </div>
          </div>
          <div className="card-column">
            <div data-aos="fade-left" className="bids-card bg-white">
              <div className="bids-card-top">
                <img src={Music} alt="Music" title="Music" />
                {/* <Link to={`/post/123`}> */}
                <h5 className="bids-title text-dark text-center fw-bolder mt-2">
                  Music
                </h5>
                <div className="text-dark text-center texth">
                  Music club - <br /> <h6>Listen to free Music.</h6>
                </div>
                {/* </Link> */}
              </div>
            </div>
          </div>
          <div className="card-column">
            <div data-aos="fade-down" className="bids-card bg-white">
              <div className="bids-card-top">
                <img src={Radio} alt="Radio" title="Radio" />
                {/* <Link to={`/post/123`}> */}
                <h5 className="bids-title text-dark text-center fw-bolder mt-2">
                  Radio
                </h5>
                <div className="text-dark text-center texth">
                  Radio club - <br /> <h6>Listen to all Radio live stations free!</h6>
                </div>
                {/* </Link> */}
              </div>
            </div>
          </div>
          <div className="card-column">
            <div data-aos="fade-right" className="bids-card bg-white">
              <div className="bids-card-top">
                <img src={chatbot} alt="Chatbot" title="Chatbot" />
                {/* <Link to={`/post/123`}> */}
                <h5 className="bids-title text-dark text-center fw-bolder mt-2">
                  Chatbot
                </h5>
                <div className="text-dark text-center texth">
                  Chatbot club - <br />{" "}
                  <h6>
                    Lucy Chat bot, which will entertain with voice and talks in
                    chat
                  </h6>
                </div>
                {/* </Link> */}
              </div>
            </div>
          </div>
          <div className="card-column">
            <div data-aos="fade-up" className="bids-card bg-white">
              <div className="bids-card-top">
                <img src={Memes} alt="Memes" title="Memes" />
                {/* <Link to={`/post/123`}> */}
                <h5 className="bids-title text-dark text-center fw-bolder mt-2">
                  Memes
                </h5>
                <div className="text-dark text-center texth">
                  Memes club - <br /><h6>Explore all time best memes live.</h6> 
                </div>
                {/* </Link> */}
              </div>
            </div>
          </div>
          <div className="card-column">
            <div data-aos="fade-left" className="bids-card bg-white">
              <div className="bids-card-top">
                <img src={Podcast} alt="Podcasts" title="Podcasts" />
                {/* <Link to={`/post/123`}> */}
                <h5 className="bids-title text-dark text-center fw-bolder mt-2">
                  Podcasts
                </h5>
                <div className="text-dark text-center texth">
                  Podcasts club - <br /> <h6>6Listen to Podcasts All over the World</h6>
                </div>
                {/* </Link> */}
              </div>
            </div>
          </div>
          <div className="card-column">
            <div data-aos="fade-down" className="bids-card bg-white">
              <div className="bids-card-top">
                <img src={Anonymousw} alt="Anonymous" title="Anonymous" />
                {/* <Link to={`/post/123`}> */}
                <h5 className="bids-title text-dark text-center fw-bolder mt-2">
                  Anonymous
                </h5>
                <div className="text-dark text-center texth">
                  Anonymous club - <br /> <h6>Anyone can Securely post anything, as
                  truth as hard, as Anonymous person. </h6>
                </div>
                {/* </Link> */}
              </div>
            </div>
          </div>

          <div className="card-column">
            <div data-aos="fade-right" className="bids-card bg-white">
              <div className="bids-card-top">
                <img
                  src={videogamestreamer}
                  alt="Gaming Videos"
                  title="Gaming Videos"
                />
                {/* <Link to={`/post/123`}> */}
                <h5 className="bids-title text-dark text-center fw-bolder mt-2">
                  Gaming Videos
                </h5>
                <div className="text-dark text-center texth">
                  Gaming Videos club - <br /><h6> Watch all the Free Gaming Videos.</h6>{" "}
                </div>
                {/* </Link> */}
              </div>
            </div>
          </div>

          <div className="card-column">
            <div data-aos="fade-up" className="bids-card bg-white">
              <div className="bids-card-top">
                <img src={workout} alt="Fitness" title="Fitness" />
                {/* <Link to={`/post/123`}> */}
                <h5 className="bids-title text-dark text-center fw-bolder mt-2">
                  Fitness
                </h5>
                <div className="text-dark text-center texth">
                  Fitness club - <br />
                 <h6> Watch free live Exercises and do Workouts and Be Fit.</h6>
                </div>
                {/* </Link> */}
              </div>
            </div>
          </div>
          <div className="card-column">
            <div data-aos="fade-left" className="bids-card bg-white">
              <div className="bids-card-top">
                <img src={quizbump} alt="Quiz" title="Quiz" />
                {/* <Link to={`/post/123`}> */}
                <h5 className="bids-title text-dark text-center fw-bolder mt-2">
                  Quiz
                </h5>
                <div className="text-dark text-center texth">
                  Quiz club - <br /><h6> Play and Participate in All Free Quizs</h6>
                </div>
                {/* </Link> */}
              </div>
            </div>
          </div>
          <div className="card-column">
            <div data-aos="fade-down" className="bids-card bg-white">
              <div className="bids-card-top">
                <img src={newyoga} alt="Breathing" title="Breathing" />
                {/* <Link to={`/post/123`}> */}
                <h5 className="bids-title text-dark text-center fw-bolder mt-2">
                  Breathing
                </h5>
                <div className="text-dark text-center texth">
                  Breathing club - <br /><h6> Practice Breathing and Be Healthy</h6>{" "}
                </div>
                {/* </Link> */}
              </div>
            </div>
          </div>
          <div className="card-column">
            <div data-aos="fade-right" className="bids-card bg-white">
              <div className="bids-card-top">
                <img src={marketing} alt="Marketing" title="Marketing" />
                {/* <Link to={`/post/123`}> */}
                <h5 className="bids-title text-dark text-center fw-bolder mt-2">
                  Shop
                </h5>
                <div className="text-dark text-center texth">
                  Shopping club - <br /><h6> Shop online everything.{" "}</h6>
                </div>
                {/* </Link> */}
              </div>
            </div>
          </div>
          <div className="card-column">
            <div data-aos="fade-up" className="bids-card bg-white">
              <div className="bids-card-top">
                <img
                  src={exchangecryptocurrency}
                  alt="Exchange Cryptocurrency"
                  title="Exchange Cryptocurrency"
                />
                {/* <Link to={`/post/123`}> */}
                <h5 className="bids-title text-dark text-center fw-bolder mt-2">
                  Crypto
                </h5>
                <div className="text-dark text-center texth">
                  Crypto club - <br /><h6> Check all live crypto prices.{" "}</h6>
                </div>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bids;
