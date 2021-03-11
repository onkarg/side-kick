import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import icon from '../assets/icon.svg';
import './App.global.css';

const Hello = () => {
  const [latestCommit, setLatestCommit] = useState(null);
  const [deployedCommit, setDeployedCommit] = useState(null);

  const getLatestCommit = async () => {
    const req = await fetch(
      'https://api.github.com/repos/onkarg/side-kick/commits'
    );
    const reqJson = await req.json();
    const sha = reqJson[0].sha.slice(0, 9);
    setLatestCommit(sha);
  };

  const getDeployedCommit = () => {
    fetch('https://mydashboard.nauto.com/version')
      .then((res) => res.json())
      .then((data) => setDeployedCommit(data.version))
      .catch((err) => console.log('err', err));
  };

  useEffect(() => {
    getLatestCommit();
    getDeployedCommit();
  }, []);

  console.log('latestCOmmit', latestCommit);
  console.log('deployed', deployedCommit);
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Login with Github
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
