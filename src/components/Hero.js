import React from 'react';

import './styles/Hero.css';
import header from '../assets/images/badge-header.svg';

class Hero extends React.Component {
  render() {
    const { children } = this.props;
    let heroClasses = 'Badge__hero';

    if (this.props.className) {
      heroClasses = `${heroClasses} ${this.props.className}`;
    }

    return (
      <div className={heroClasses}>
        <figure>
          <img className="img-fluid" src={header} alt="Logo" />
        </figure>
        {children}
      </div>
    );
  }
}

export default Hero
