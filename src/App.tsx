/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import { CardComponent } from './CardComponent';

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
    <div className="card-page">
      <div className="card-wrapper">
        <CardComponent />
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
