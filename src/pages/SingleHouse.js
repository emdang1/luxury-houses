import React, { Component } from 'react';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
// import Hero from '../components/Hero';
import StyledHero from '../components/StyledHero';

class SingleHouse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slug: this.props.match.params.slug,
    };
  }

  // componentDidMount() {
  //   console.log(this.props.match);
  // }

  static contextType = RoomContext;

  render() {
    const { getRoomData } = this.context;
    const room = getRoomData(this.state.slug);
    if (!room) {
      return (
        <div className='error'>
          <h3>no such room could be found... </h3>
          <Link to='/rooms' className='btn-primary'>
            Back to rooms
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
      breakfast,
      pets,
      images,
    } = room;
    return (
      <>
        <StyledHero img={images[0]}>
          <Banner title={`${name} room`}>
            <Link to='/rooms' className='btn-primary'>
              Back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className='single-room'>
          <div className='single-room-images'>
            {images.map((imgUrl, i) => (
              <img key={i} src={imgUrl} alt='room pic' />
            ))}
          </div>
          <div className='single-room-info'>
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
              <h6>{breakfast && 'Free breakfast included'}</h6>
            </article>
          </div>
        </section>
        <section className='room-extras'>
          <h6>Extras</h6>
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
