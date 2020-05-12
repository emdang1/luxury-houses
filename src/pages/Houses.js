import React from 'react';
import Hero from '../components/Hero/Hero';
import Banner from '../components/Banner/Banner';
import { Link } from 'react-router-dom';
import HousesContainer from '../components/HousesContainer';

const Houses = () => {
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

export default Houses;
