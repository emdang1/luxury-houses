import React, { Component } from 'react';
import Title from '../Title/Title';
import { FaRegGem, FaGlobeEurope } from 'react-icons/fa';
import './Features.css';

class Features extends Component {
  state = {
    features: [
      {
        icon: <FaRegGem />,
        title: 'breathtaking buldings',
        info:
          'Book a night in a breathtaking summer mansion or in a lovely countryside cabin. We are sure you will choose from our wide range of luxury houses.',
      },
      {
        icon: <FaGlobeEurope />,
        title: 'exclusive places',
        info:
          'Do you prefer city or countryside? Our luxury houses are located all over the world. Choose what you truly desire',
      },
    ],
  };

  render() {
    return (
      <section className='features'>
        <Title title='Features' />
        <div className='features-center'>
          {this.state.features.map((feature, i) => (
            <article key={i} className='service'>
              <span>{feature.icon}</span>
              <h6>{feature.title}</h6>
              <p>{feature.info}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

export default Features;
