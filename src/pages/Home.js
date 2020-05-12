import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedHouses from '../components/FeaturedHouses';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Hero>
        <Banner title='luxury houses' subtitle='experience the luxury'>
          <Link to='/rooms' className='btn-primary'>
            HOUSES
          </Link>
        </Banner>
      </Hero>

      <Services />
      <FeaturedHouses />
    </>
  );
};

export default Home;
