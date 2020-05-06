import React, { Component } from 'react';
import RoomProvider, { RoomContext, RoomConsumer } from '../context';

class FeaturedRooms extends Component {
  // connecting to the context
  static contextType = RoomContext;

  render() {
    const { featuredRooms } = this.context;

    return <div>{featuredRooms.map((room) => room.name)}</div>;
  }
}

export default FeaturedRooms;
