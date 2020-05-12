import React from 'react';
import HouseList from './HouseList/HouseList';
import HousesFilter from './HousesFilter/HousesFilter';
import { withConsumer } from '../context';
import Loading from './Loading/Loading';

const HousesContainer = ({ context }) => {
  const { loading, sortedHouses } = context;

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <HousesFilter />
      <HouseList houses={sortedHouses} />
    </>
  );
};

export default withConsumer(HousesContainer);
