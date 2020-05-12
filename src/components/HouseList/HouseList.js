import React from 'react';
import House from '../House/House';
import './HouseList.css';

const HouseList = ({ houses }) => {
  if (houses.length === 0) {
    return (
      <div className='empty-search'>
        <h3>unfortunately no houses matched your search parameters</h3>
      </div>
    );
  }

  return (
    <section className='houseList'>
      <div className='houselist-center'>
        {houses.map((house, i) => (
          <House key={i} house={house} />
        ))}
      </div>
    </section>
  );
};

export default HouseList;
