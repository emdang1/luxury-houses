import React, { Component, createContext } from 'react';
import client from './Contentful';

export const HouseContext = createContext();

class HouseProvider extends Component {
  state = {
    houses: [],
    sortedHouses: [],
    featuredHouses: [],
    loading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    pool: false,
    pets: false,
  };

  formatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let house = {
        ...item.fields,
        images,
        id,
      };

      return house;
    });

    return tempItems;
  };

  getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'luxuryHouses',
      });

      let houses = this.formatData(response.items);
      let featuredHouses = houses.filter((house) => house.featured === true);
      let maxPrice = Math.max(...houses.map((house) => house.price));
      let maxSize = Math.max(...houses.map((house) => house.size));

      this.setState({
        houses,
        featuredHouses,
        sortedHouses: houses,
        loading: false,
        maxPrice: maxPrice,
        maxSize: maxSize,
        price: maxPrice,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  getHouseData = (slug) => {
    let house = [...this.state.houses].find((house) => house.slug === slug);
    return house;
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;

    this.setState(
      {
        [name]: value,
      },

      () => this.filterHouses()
    );
  };

  filterHouses = () => {
    let {
      houses,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      pool,
      pets,
    } = this.state;

    let tempHouses = [...houses];
    capacity = +capacity;
    price = +price;

    if (type !== 'all') {
      tempHouses = tempHouses.filter((house) => house.type === type);
    }

    if (capacity !== 1) {
      tempHouses = tempHouses.filter((house) => house.capacity >= capacity);
    }

    tempHouses = tempHouses.filter((house) => house.price <= price);

    tempHouses = tempHouses.filter(
      (house) => house.size >= minSize && house.size <= maxSize
    );

    if (pool) {
      tempHouses = tempHouses.filter((house) => house.pool === true);
    }

    if (pets) {
      tempHouses = tempHouses.filter((house) => house.pets === true);
    }

    this.setState({
      sortedHouses: tempHouses,
    });
  };

  render() {
    return (
      <HouseContext.Provider
        value={{
          ...this.state,
          getHouseData: this.getHouseData,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </HouseContext.Provider>
    );
  }
}

export const HouseConsumer = HouseContext.Consumer;

export function withConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <HouseConsumer>
        {(value) => <Component {...props} context={value} />}
      </HouseConsumer>
    );
  };
}

export default HouseProvider;
