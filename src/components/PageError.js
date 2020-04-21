import React from 'react';

function PageError(props) {
  return (
    <div className="Badges-not-found-data">
      <h3><span role="img" aria-label="emoji error">❌</span> There is an error, please try again later: <strong>{props.error}</strong> 😱</h3>
    </div>
  );
}

export default PageError;
