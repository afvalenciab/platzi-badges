import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Badge from '../components/Badge';
import Logo from '../assets/images/platziconf-logo.svg';
import DeleteBadgeModal from '../components/DeleteBadgeModal';
import './styles/BadgeDetails.css';

function BadgeDetails(props) {
  return (
    <>
      <Hero logo={Logo}>
        <h1>{props.data.firstName} {props.data.lastName}</h1>
      </Hero>

      <div className="Badge-container">
        <div className="Badge-item">
          <Badge {...props.data} />
        </div>
        <div className="Badge-actions">
          <h3>Actions:</h3>
          <Link
            to={`/badges/${props.data.id}/edit`}
            className="btn btn-primary mb-3">
            Edit
          </Link>
          <button
            className="btn btn-danger mb-3"
            onClick={props.onOpenModal}>
            Delete
          </button>
          <DeleteBadgeModal isOpen={props.modalIsOpen} onClose={props.onCloseModal} onDeleteBadge={props.onDeleteBadge} />
        </div>
      </div>
    </>
  );
}

export default BadgeDetails;
