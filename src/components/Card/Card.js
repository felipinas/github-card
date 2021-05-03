import React from 'react';

import './Card.css';

function Card(props) {
  return (
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
  );
}

export default Card;