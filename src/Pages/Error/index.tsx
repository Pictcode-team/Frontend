import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Error = () => {
  return (
    <>
      <div className="error-container">
        <h1>Upss, this workspace is not available anymore</h1>
        <h1>
          You can go back <Link to="/">Home</Link>
        </h1>
      </div>
    </>
  )
}

export default Error;