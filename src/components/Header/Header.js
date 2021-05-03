import React from 'react';

import './Header.css';

import search from '../assets/search.svg';

function Header() {
  return (
    <header>

      <div className="container">

        <h1>
          Crie seu <br />
          próprio card.
        </h1>

        <p>
          você só precisa nos dizer seu nickname :)
        </p>

        <div id="input-div">
          <input type="text" placeholder="seu nickname aqui"/>
          <button>
            <img src={search} alt="search"/>
          </button>
        </div>

      </div>

    </header>
  );
}

export default Header;