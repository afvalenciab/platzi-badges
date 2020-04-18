import React from 'react';
import Loader from './Loader';
import './styles/PageLoading.css';

function PageLoading() {
  return (
    <div className="Page_loading">
      <Loader className="Loader" />
    </div>
  );
}

export default PageLoading;
