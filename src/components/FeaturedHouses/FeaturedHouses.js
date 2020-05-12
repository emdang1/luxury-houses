import React, { Component } from 'react';
import { HouseContext } from '../../context';
import Loading from '../Loading/Loading';
import House from '../House/House';
import Title from '../Title/Title';
import './FeaturedHouses.css';

class FeaturedHouses extends Component {
  static contextType = HouseContext;

  render() {
    const { featuredHouses, loading } = this.context;
    let houses = featuredHouses.map((house, i) => (
      <House key={i} house={house} />
    ));

    return (
      <section className='featured-houses'>
        <Title title='featured houses' />
        <div className='featured-houses-center'>
          {loading ? <Loading /> : houses}
        </div>
      </section>
    );
  }
}

export default FeaturedHouses;
