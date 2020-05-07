import React from 'react';
import RoomsList from './RoomsList';
import RoomsFilter from './RoomsFilter';
// import { RoomConsumer } from '../context';
import { withConsumer } from '../context';
import Loading from '../components/Loading';

const RoomsContainer = ({ context }) => {
  const { loading, sortedRooms } = context;

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <RoomsFilter />
      <RoomsList rooms={sortedRooms} />
    </>
  );

  // <RoomConsumer>
  //   {(value) => {
  //     const { rooms, sortedRooms, loading } = value;
  //     if (loading) {
  //       return <Loading />;
  //     }

  //     return (
  //       <>
  //         <RoomsFilter rooms={rooms} />
  //         <RoomsList rooms={sortedRooms} />
  //       </>
  //     );
  //   }}
  // </RoomConsumer>
};

export default withConsumer(RoomsContainer);
