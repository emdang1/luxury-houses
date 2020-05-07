import React, { useContext } from 'react';
import { RoomContext } from '../context';
import Title from './Title';

const RoomsFilter = () => {
  const {
    rooms,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
    handleChange,
  } = useContext(RoomContext);

  const roomTypes = rooms.map((room) => room.type);
  const onlyUniqueTypes = ['all', ...new Set(roomTypes)];

  const capacityValues = rooms.map((room) => room.capacity);
  const onlyUniqueCapacity = [...new Set(capacityValues)];
  console.log('unique', onlyUniqueCapacity);

  return (
    <section className='filter-container'>
      <Title title='search rooms' />
      <form className='filter-form'>
        <div className='form-group'>
          <label htmlFor='type'>room type</label>
          <select
            name='type'
            id='type'
            value={type}
            className='form-control'
            onChange={handleChange}
          >
            {onlyUniqueTypes.map((type, i) => (
              <option key={i} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor='capacity'>Guest</label>
          <select
            name='capacity'
            id='capacity'
            value={capacity}
            className='form-control'
            onChange={handleChange}
          >
            {onlyUniqueCapacity.map((capacity, i) => (
              <option key={i} value={capacity}>
                {capacity}
              </option>
            ))}
          </select>
        </div>
      </form>
    </section>
  );
};

export default RoomsFilter;
