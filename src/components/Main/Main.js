import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Repo } from "../"; 

import './Main.css';

function Main() {
  const [userData, setUserData] = useState([]);
  const [repos, setRepos] = useState([]);
  
  const catchUserData = async () => {
    const res = await axios.get("https://api.github.com/users/felipinas");
    setUserData(res.data);
  };

  const catchRepos = async () => {
    const res = await axios.get("https://api.github.com/users/felipinas/repos");
    setRepos(res.data);
  };

  useEffect( () => {
    catchUserData();
  }, []);

  useEffect( () => {
    catchRepos();
  }, []);

  const { avatar_url, name, login } = userData;

  return (
      <main className="container">

          <Card
          image={avatar_url}
          name={name}
          login={login}
          />

          <h1 id="repo-main-title">Repositórios</h1>

          <ul>
              {
                repos.map( ( { id, name, html_url} ) => <li key={id}><Repo name={name} url={html_url} /></li>
                )
              }
          </ul>

          

      </main>
  );
}

export default Main;