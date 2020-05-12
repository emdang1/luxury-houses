import React, { Component } from 'react';
import RoomProvider, { RoomContext, RoomConsumer } from '../context';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';

class FeaturedHouses extends Component {
  // connecting to the context
  static contextType = RoomContext;

  render() {
    const { featuredRooms, loading } = this.context;
    let rooms = featuredRooms.map((room, i) => <Room key={i} room={room} />);

    return (
      <section className='featured-rooms'>
        <Title title='featured houses' />
        <div className='featured-rooms-center'>
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}

export default FeaturedHouses;
