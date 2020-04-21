import React from 'react';
import { Link } from 'react-router-dom';
import BadgeItemList from './BadgeItemList';
import useSearchBadges from '../hooks/useSearchBadges';
import './styles/BadgesList.css';

function BadgesList(props) {
  const { filterBadge, data } = props;
  const filteredResult = useSearchBadges(data, filterBadge);

  if (filteredResult.length === 0) {
    return (
      <div className="Badges-not-found-data">
        <h3>Badges were not found!</h3>
        <Link to="/badges/new" className="btn btn-primary">Create the new Badge</Link>
      </div>
    );
  }

  return (
    <div className="Badges-list-container">
      <div className="Badges-buttons">
        <Link to="/badges/new" className="btn btn-primary">
          New Badge
        </Link>
      </div>

      <div className="Badges-list-data mb-4">
        <div className="Badges-list-data-container">
          {filteredResult.map((itemBadge) => {
            return (
              <Link key={itemBadge.id} to={`/badges/${itemBadge.id}`} className="link-unstyled">
                <BadgeItemList {...itemBadge} />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default BadgesList
