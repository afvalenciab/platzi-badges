import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BadgesList from '../components/BadgesList';

class Badges extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero className='Badges__list' />
        <BadgesList />
      </div>
    );
  }
}

export default Badges
