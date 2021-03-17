export {}
import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export const Unavailable = () => {
  return (
    <>
      <h1>Upss, this workspace is not available anymore</h1>
      <h1>
        You can go
        <Link to="/Home">
          <a>Home</a>
        </Link>
      </h1>
    </>
  )
}