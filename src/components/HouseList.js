import React from 'react';
import Room from './Room';

const HouseList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className='empty-search'>
        <h3>unfortunately no houses matched your search parameters</h3>
      </div>
    );
  }

  return (
    <section className='roomsList'>
      <div className='roomslist-center'>
        {rooms.map((room, i) => (
          <Room key={i} className='' room={room} />
        ))}
      </div>
    </section>
  );
};

export default HouseList;
