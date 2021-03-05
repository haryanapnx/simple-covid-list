import React from 'react';
import "./loader.scss";

const Loader: React.FC = () => (
  <div className="overlay-loader">
    <div className="loader center">
      <div className="spinner-border text-success" role="status">
        <span className="sr-only">Sedang dimuat...</span>
      </div>
    </div>
  </div>
);

export default Loader;