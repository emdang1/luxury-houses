import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './House.css';

const House = ({ house }) => {
  const { name, slug, images, price } = house;
  return (
    <article className='house'>
      <div className='img-container'>
        <img src={images[0]} alt='pic from house' />
        <div className='price-top'>
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/houses/${slug}`} className='btn-primary house-link'>
          Details
        </Link>
      </div>
      <p className='house-info'>{name}</p>
    </article>
  );
};

export default House;

House.propTypes = {
  house: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
