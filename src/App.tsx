/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import { CardComponent } from './CardComponent';

const Hello = () => {
  const [latestCommit, setLatestCommit] = useState(null);
  const [deployedCommit, setDeployedCommit] = useState(null);
  const [pullRequests, setPullRequests] = useState(null);

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

  const getPullRequests = () => {
    fetch('https://api.github.com/repos/onkarg/side-kick/pulls?state=all')
      .then((res) => res.json())
      .then((data) => setPullRequests(data))
      .catch((err) => console.log('err', err));
  };

  useEffect(() => {
    getLatestCommit();
    getDeployedCommit();
    getPullRequests();
  }, []);

  return (
    <div className="main">
      <div className="heading">Deploy Easy</div>
      <div className="content">
        <div className="card-wrapper">
          <CardComponent current={latestCommit} deployed={deployedCommit} />
        </div>
        <div className="list">
          <div>list will go here</div>
        </div>
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
