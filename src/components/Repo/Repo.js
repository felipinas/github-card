import React from 'react';

import './Repo.css';
import Arrow from '../assets/right-arrow.svg';

function Repo(props) {
  return (
      <a href={props.url} target="_blank" rel="noreferrer">
          <div className="repo">
              <h1>
                {props.name}
              </h1>

            <img src={Arrow} alt="Arrow"/>
          </div>
      </a>
  );
}

export default Repo;