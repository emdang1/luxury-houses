import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title='luxurious rooms'
          subtitle='deluxe rooms starting at $2.99'
        >
          <Link to='/rooms' className='btn-primary'>
            OUR ROOMS
          </Link>
        </Banner>
      </Hero>

      <Services />
    </>
  );
};

export default Home;
