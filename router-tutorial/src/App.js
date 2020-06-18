import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/ganada">ganada profile</Link>
        </li>
        <li>
          <Link to="/profile/mabasa">mabasa profile</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path={["/about", "/info"]} component={About} />
      <Route path="/profile/:username" component={Profile} />
    </div>
  )
}

export default App;