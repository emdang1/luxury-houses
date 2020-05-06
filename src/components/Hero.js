import React from 'react';

const Hero = ({ children, hero }) => {
  return <header className={hero}>{children}</header>;
};

export default Hero;

// default value for "hero" prop, if not stated
Hero.defaultProps = {
  hero: 'defaultHero',
};
