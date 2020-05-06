import React, { Component } from 'react';
import RoomProvider, { RoomContext, RoomConsumer } from '../context';
import Loading from '../components/Loading';

class FeaturedRooms extends Component {
  // connecting to the context
  static contextType = RoomContext;

  render() {
    const { featuredRooms, loading } = this.context;

    return loading ? <Loading /> : 'loaded';
  }
}

export default FeaturedRooms;
