import React from 'react';
import Hero from 'components/Hero';
import BadgesList from 'components/BadgesList';
import badgeHeader from '../assets/images/badge-header.svg';

class Badges extends React.Component {
  render() {
    return (
      <>
        <Hero logo={badgeHeader} className='Badges__list' />
        <BadgesList />
      </>
    );
  }
}

export default Badges
