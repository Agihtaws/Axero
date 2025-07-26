import React from 'react';
import './LoadingState.css';

const LoadingState = () => {
  return (
    <div className="loading-state">
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
      <p className="loading-text">Loading your workspace...</p>
    </div>
  );
};

export default LoadingState;
