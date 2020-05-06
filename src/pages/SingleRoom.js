import React, { Component } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';

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
    return <div>Hello from single room page</div>;
  }
}

export default SingleRoom;
