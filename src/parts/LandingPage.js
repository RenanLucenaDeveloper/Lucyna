import React from 'react';
import Head from './Head';
import Marquee from './Marquee';
import { Link } from 'react-router-dom';

import logoSVG from '../img/logo.svg';
import rocketSVG from '../img/rocket.svg';
import marketplaceSVG from '../img/marketplace.svg';
import starSVG from '../img/star.svg';

const LandingPage = () => {
  return (
    <>
      <Head
        title="Lucyna | Landing Page"
        description="Landing page that you were looking for"
      />
      <img src={logoSVG} alt="Logo icon" id="logo" />
      <section id="landing-section">
        <h1>Fast & Good Gaming Store</h1>
        <nav>
          <ul id="buttons-nav">
            <li>
              <Link to="/store" className="round-button" id="see-all-button">
                <img src={rocketSVG} alt="See all games icon" />
                See All Games
              </Link>
            </li>
            <li>
              <Link to="/store" className="round-button">
                <img src={marketplaceSVG} alt="marketplace icon" />
                Marketplace
              </Link>
            </li>
          </ul>
        </nav>
        <div className="card">
          <p>This is a landing page example</p>
          <img src={starSVG} alt="star-rate icon" />
        </div>
      </section>
      <Marquee />
    </>
  );
};

export default LandingPage;
