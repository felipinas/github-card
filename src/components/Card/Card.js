import React from 'react';

import './Card.css';

function Card(props) {
  return (
    <a href={props.profileUrl} target="_blank" rel="noreferrer">
      <div className="card">
          <div
          className="card-pic"
          style={
              {
                background: `url(${props.image})`,
            }
            }
          >
          </div>

          <div className="card-names">
              <h1>{props.name}</h1>
              <span>{props.login}</span>
          </div>
      </div>
    </a> 
  );
}

export default Card;