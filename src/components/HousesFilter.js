import React, { useContext } from 'react';
import { RoomContext } from '../context';
import Title from './Title';

const HousesFilter = () => {
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

  return (
    <section className='filter-container'>
      <Title title='search houses' />
      <form className='filter-form'>
        <div className='form-group'>
          <label htmlFor='type'>house type</label>
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

        <div className='form-group'>
          <label htmlFor='price'>Price ${price}</label>
          <input
            type='range'
            name='price'
            min={minPrice}
            max={maxPrice}
            id='price'
            value={price}
            onChange={handleChange}
            className='form-control'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='size'>house size</label>
          <div className='size-inputs'>
            <input
              type='number'
              name='minSize'
              id='size'
              value={minSize}
              onChange={handleChange}
              className='size-input'
            />

            <input
              type='number'
              name='maxSize'
              id='size'
              value={maxSize}
              onChange={handleChange}
              className='size-input'
            />
          </div>
        </div>

        <div className='form-group'>
          <div className='single-extra'>
            <input
              type='checkbox'
              name='breakfast'
              id='breakfast'
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor='breakfast'>Breakfast</label>
          </div>

          <div className='single-extra'>
            <input
              type='checkbox'
              name='pets'
              id='pets'
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor='pets'>Pets</label>
          </div>
        </div>
      </form>
    </section>
  );
};

export default HousesFilter;
