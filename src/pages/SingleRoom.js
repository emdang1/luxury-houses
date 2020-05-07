import React, { Component } from 'react';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
// import Hero from '../components/Hero';
import StyledHero from '../components/StyledHero';

class SingleRoom extends Component {
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
      <StyledHero img={images[0]}>
        <Banner title={`${name} room`}>
          <Link to='/rooms' className='btn-primary'>
            Back to rooms
          </Link>
        </Banner>
      </StyledHero>
    );
  }
}

export default SingleRoom;
