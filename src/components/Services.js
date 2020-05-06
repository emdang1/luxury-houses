import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'free cocktails',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorem iusto quae! Dignissimos vero, eum doloremque ut saepe ipsa sunt voluptas voluptatem esse ab at dicta dolorum dolor aliquid! Eligendi',
      },
      {
        icon: <FaHiking />,
        title: 'endless hiking',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorem iusto quae! Dignissimos vero, eum doloremque ut saepe ipsa sunt voluptas voluptatem esse ab at dicta dolorum dolor aliquid! Eligendi',
      },
      {
        icon: <FaShuttleVan />,
        title: 'free shuttle',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorem iusto quae! Dignissimos vero, eum doloremque ut saepe ipsa sunt voluptas voluptatem esse ab at dicta dolorum dolor aliquid! Eligendi',
      },
      {
        icon: <FaBeer />,
        title: 'strongest beer',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorem iusto quae! Dignissimos vero, eum doloremque ut saepe ipsa sunt voluptas voluptatem esse ab at dicta dolorum dolor aliquid! Eligendi',
      },
    ],
  };

  render() {
    return (
      <section className='services'>
        <Title title='Services' />
        <div className='services-center'>
          {this.state.services.map((service, i) => (
            <article key={i} className='service'>
              <span>{service.icon}</span>
              <h6>{service.title}</h6>
              <p>{service.info}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

export default Services;
