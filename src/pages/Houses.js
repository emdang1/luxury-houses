import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import HousesContainer from '../components/RoomsContainer';

const Rooms = () => {
  return (
    <>
      <Hero hero='housesHero'>
        <Banner title='houses'>
          <Link to='/' className='btn-primary'>
            return home
          </Link>
        </Banner>
      </Hero>
      <HousesContainer />
    </>
  );
};

export default Rooms;
