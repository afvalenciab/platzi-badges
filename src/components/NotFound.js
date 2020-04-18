import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NotFound.css';

function NotFound() {
  return (
    <div className="Not-found-container">
      <h1>404: Not Found</h1>
      <Link to="/" className="btn btn-primary">Go to home</Link>
    </div>
  );
}

export default NotFound;