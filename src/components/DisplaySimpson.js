import React from 'react';
import './DisplaySimpson.css';

function DisplaySimpson({ simpson }) {
  return (
    <div className="DisplaySimpson">
      <img
        src={simpson.image}
        alt={simpson.name}
      />
      <ul>
        <li>Quote: {simpson.quote}</li>
        <li>
          Character: {simpson.character}{' '}
          {simpson.name}{' '}
          {simpson.name}
        </li>
        <li>
          Direction: {simpson.characterDirection}
        </li>
      </ul>
    </div>
  );
};

export default DisplaySimpson;