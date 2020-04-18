import React from 'react';

import md5 from 'md5';

import './styles/Badge.css';
import confLogo from 'assets/images/badge-header.svg';

class Badge extends React.Component {
  render() {
    const firstName = this.props.firstName || 'FIRST_NAME';
    const lastName = this.props.lastName || 'LAST_NAME';
    const email = this.props.email || 'EMAIL';
    const jobTitle = this.props.jobTitle || 'JOB_TITLE';
    const twitter = this.props.twitter || 'twitter';

    const avatarUrl = email ? `https://www.gravatar.com/avatar/${md5(email)}?d=identicon` : 'https://s.gravatar.com/avatar';

    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo platziconf"></img>
        </div>

        <div className="Badge__section-name">
          <img className="Badge__avatar" src={avatarUrl} alt="Avatar" />
          <h1>{firstName}<br />{lastName}</h1>
        </div>

        <div className="Badge__section-info">
          <h3>{jobTitle}</h3>
          <div>{`@${twitter}`}</div>
        </div>

        <div className="Badge__footer">
          <p>#platziconf</p>
        </div>
      </div>
    );
  };
}

export default Badge;
