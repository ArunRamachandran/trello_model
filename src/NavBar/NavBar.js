import React from 'react';
import {Link} from 'react-router-dom';
import '../Styles/navbar.css';

const NavBar = () => {
	return (
		<nav className="navbar navbar-dark bg-primary fixed-top">
			<Link className="navbar-brand" to="/">
				Q&App
			</Link>
		</nav>
	)
};

export default NavBar;