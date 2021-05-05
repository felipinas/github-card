import { React, useState, useEffect } from 'react';
import { Card, Repo } from "../";
import axios from 'axios';

import './Main.css';
import search from '../assets/search.svg';

function Main() {

  const [userData, setUserData] = useState([]);
  const [repos, setRepos] = useState([]);
  const [userName, setUserName] = useState("felipinas");
  
  const input = document.querySelector("input");

  const catchUser = async user => {
    const res = await axios.get(`https://api.github.com/users/${user}`);
    setUserData(res.data);
  };

  const catchRepos = async user => {
    const res = await axios.get(`https://api.github.com/users/${user}/repos`);
    setRepos(res.data);
  };

  useEffect( () => {
    catchUser(userName);
    catchRepos(userName);
  }, [userName]);

  const changeUserName = () => setUserName(input.value);
  const { avatar_url, name, login } = userData;

  return (
    <main className="container">

      <div id="input-div">
        <input type="text" placeholder="seu nickname aqui"/>

        <button onClick={changeUserName}>
          <img src={search} alt="search"/>
        </button>
      </div>

      <Card
      image={avatar_url}
      name={name}
      login={login}
      />

      <h1 id="repo-main-title">Repositórios</h1>

      <ul>
        {
          repos.map( ( { id, name, html_url } ) =>
          <li key={id}>
            <Repo name={name} url={html_url}/>
          </li>
          )
        }
      </ul>

    </main>
  );
}

export default Main;