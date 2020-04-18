import React from 'react';
import { Link } from 'react-router-dom';

import PlatziConfLogo from 'assets/images/platziconf-logo.svg';
import PlatziAstronautsLogo from '../assets/images/astronauts.svg';

import './styles/Home.css';

function Home() {
  return (
    <div className="Home-container">
      <div className="Home-info">
        <figure className="Home-figure-conf">
          <img src={PlatziConfLogo} alt="Logo Platzi Conf" />
        </figure>
        <h1>PRINT YOUR BADGES</h1>
        <p>The easiest way to manage your conference</p>
        <Link to="/badges" className="btn btn-primary Home-info-link">Start now</Link>
      </div>

      <img className="Home-img-logo" src={PlatziAstronautsLogo} alt="Logo Platzi astronauts" />
    </div>
  );
}

export default Home;
