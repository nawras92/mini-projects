import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav.js';
import Home from './pages/Home.js';
import Posts from './pages/Posts.js';
import Users from './pages/Users.js';

function App() {
  return (
	  <React.Fragment>
		<Router>
		  < Nav />
		  <div className="container">
	  			<Switch>
	  				<Route exact path="/" component={Home}></Route>
	  				<Route exact path="/posts" component={Posts}></Route>
	  				<Route exact path="/users" component={Users}></Route>
	  			</Switch>
		  </div>
		</Router>
	  </React.Fragment>
  );
}

export default App;
