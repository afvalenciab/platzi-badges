import React from 'react';
import twitterLogo from '../assets/images/twitter.svg';
import './styles/BadgeItemList.css';

class BadgeItemList extends React.Component {
  render() {
    const { firstName, lastName, twitter, jobTitle, avatarUrl } = this.props;
    return (
      <div className="Badge-item-container">
        <figure className="Badge-item-figure">
          <img src={avatarUrl} alt="avatar" />
        </figure>
        <div className="Badge-item-info">
          <p>{firstName} {lastName}</p>
          <p><img src={twitterLogo} alt="Twitter Logo" /> {`@${twitter}`}</p>
          <p>{jobTitle}</p>
        </div>
      </div>
    );
  }
}

export default BadgeItemList
