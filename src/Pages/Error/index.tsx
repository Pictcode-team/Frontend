import React from 'react';
import { Link } from 'react-router-dom';

import hand from '../../assets/img/hand-right.png'

import './styles.scss';

const Error = () => {
  return (
    <>
      <div className="error-container">
        <h1 className="error-container--first">This page is not available anymore<br/>or doesn't exists</h1>
        <h1 className="error-container--second">
          Try to go back <Link to="/">Home</Link>
        </h1>
      </div>
    </>
  )
}

export default Error;