/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./About.css";
import { InstagramEmbed } from "react-social-media-embed";

function About() {
  return (
    <div>
      <h1> Our Super App</h1>
      
      <iframe
        className="ytl"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/2Jh9ApWWrjg"
        title="Socio Club promo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <p>
        {" "}
        Socio club is the indian super app which focus on only social and
        entertainment part.
        <br />
        It is a one stop destination for all your social needs.
        <br />
        <p>
          This Super app has a club for everyone's taste! There are many
          opportunities to win, amazing prizes, and more.
        </p>{" "}
        When you have everything at one place, you can save your time, money and
        memory. You don't need to know multiple password and no need of multiple
        apps. Now it's time for you to experience the power of the super app.
      </p>
      {/* <blockquote class="twitter-tweet">
        <p lang="en" dir="ltr">
          Games Club - Play Unlimited Games for Free on Socio Club .
        </p>
        Coming Soon...
        <a href="https://twitter.com/hashtag/games?src=hash&amp;ref_src=twsrc%5Etfw">
          #games
        </a>
        <a href="https://twitter.com/hashtag/socioclub?src=hash&amp;ref_src=twsrc%5Etfw">
          #socioclub
        </a>
        <a href="https://twitter.com/hashtag/superapp?src=hash&amp;ref_src=twsrc%5Etfw">
          #superapp
        </a> */}
        {/* <img
          src="https://www.instagram.com/p/Ce_kyScJM1U/?igshid=YmMyMTA2M2Y%3D "
          alt="socio"
          width={40}
          height={50}
        /> */}
      {/* </blockquote> */}
    </div>
  );
}

export default About;
