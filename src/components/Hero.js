import React from 'react';

import './styles/Hero.css';

class Hero extends React.Component {
  render() {
    const { children, logo, className } = this.props;
    let heroClasses = 'Badge__hero';

    if (this.props.className) {
      heroClasses = `${heroClasses} ${className}`;
    }

    return (
      <div className={heroClasses}>
        <figure>
          <img className="img-fluid" src={logo} alt="Logo" />
        </figure>
        {children}
      </div>
    );
  }
}

export default Hero
