import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Markdown from 'react-remarkable';
import { Link, Route } from 'react-router-dom';
import RouteDemo from './RouteDemo';

const md = `
## Reasons React is great

1. Server-side rendering
2. This totally works:

<span style='color: blue'>Hey</span>

\`\`\`html
<span style='color: blue'>Hey</span>
\`\`\`

Pretty neat!
`;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p>
        <Link to="/chandra">Chandra</Link> |
        <Link to="/connie">Connie</Link> |
        <Link to="/vicki">Vicki</Link>
      </p>
      <Route path="/:name" component={RouteDemo} />
      <Markdown source={md} />
      <hr />
      <Markdown options={{ html: true }}>
        {md}
      </Markdown>
    </div>
  );
}


export default App;
