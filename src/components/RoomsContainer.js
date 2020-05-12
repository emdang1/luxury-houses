import React from 'react';
import HouseList from './HouseList';
import HousesFilter from './HousesFilter';
import { withConsumer } from '../context';
import Loading from '../components/Loading';

const HousesContainer = ({ context }) => {
  const { loading, sortedRooms } = context;

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <HousesFilter />
      <HouseList rooms={sortedRooms} />
    </>
  );
};

export default withConsumer(HousesContainer);
