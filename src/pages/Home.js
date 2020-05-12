import React from 'react';
import Hero from '../components/Hero/Hero';
import Banner from '../components/Banner/Banner';
import Features from '../components/Features/Features';
import FeaturedHouses from '../components/FeaturedHouses/FeaturedHouses';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Hero>
        <Banner title='luxury houses' subtitle='experience the luxury'>
          <Link to='/houses' className='btn-primary'>
            HOUSES
          </Link>
        </Banner>
      </Hero>

      <Features />
      <FeaturedHouses />
    </>
  );
};

export default Home;
