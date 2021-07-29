import React from 'react';
import {Link} from 'react-router-dom';

const Nav = (props) => {
	return (
		<nav className="nav">
			<ul className="nav-list">
				<li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
				<li className="nav-item"><Link className="nav-link" to="/posts">Posts</Link></li>
				<li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
			</ul>
		</nav>
	)
}

export default Nav;
