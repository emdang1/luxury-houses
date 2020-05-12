import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';
import { Link } from 'react-router-dom';
import { HouseContext } from '../../context';
import StyledHero from '../../components/StyledHero';
import './SingleHouse.css';

class SingleHouse extends Component {
  static contextType = HouseContext;

  render() {
    const { getHouseData } = this.context;
    const house = getHouseData(this.props.match.params.slug);

    if (!house) {
      return (
        <div className='error'>
          <h3>no such house could be found... </h3>
          <Link to='/houses' className='btn-primary'>
            Back to houses
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      pool,
      pets,
      images,
    } = house;
    return (
      <>
        <StyledHero img={images[0]}>
          <Banner title={`${name} house`}>
            <Link to='/houses' className='btn-primary'>
              Back to houses
            </Link>
          </Banner>
        </StyledHero>

        <section className='single-house'>
          <div className='single-house-images'>
            {images.map((imgUrl, i) => (
              <img key={i} src={imgUrl} alt='single pic' />
            ))}
          </div>
          <div className='single-house-info'>
            <article>
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className='info'>
              <h3>Info</h3>
              <h6>Price: ${price}</h6>
              <h6>Size: {size} SQFT</h6>
              <h6>
                Capacity:{' '}
                {capacity > 1 ? `${capacity} People` : `${capacity} person`}
              </h6>
              <h6>Pets: {pets ? 'Allowed' : 'Not allowed'}</h6>
              <h6>Pool: {pool ? 'Yes' : 'No'}</h6>
            </article>
          </div>
        </section>
        <section className='house-extras'>
          <h3>Extras</h3>
          <ul className='extras'>
            {extras.map((item, i) => (
              <li key={i}>*{item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}

export default SingleHouse;
