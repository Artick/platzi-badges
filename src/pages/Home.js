import React from 'react';

import PlatziConf from '../images/platziconf-logo.svg';
import Astronauts from '../images/astronauts.svg';
import './styles/Home.css';
import {Link} from 'react-router-dom';

function Home () {
  return (
    <div className="landing__container pt-5">
      <div className="container">
        <div className="row align-items-center pt-5">
          <div className="col-4">
            <img src={PlatziConf} alt="Logo Conferencia" />
            <div className="container p-4 text-white">
              <h1>PRINT YOUR BADGES</h1>
              <p>The easiest way to manage your conference</p>
            </div>
            <Link className="btn btn-primary" to="/badges"> Start Now</Link>
          </div>
          <div className="col-8">
            <img src={Astronauts} alt="Austronautas" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
