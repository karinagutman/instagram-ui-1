import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

function Menu() {
	return (
		<div className="Menu">
			<nav className="navbar navbar-dark bg-dark">
				<a className="navbar-brand" href="#">Instagram</a>

				<ul className="nav mr-auto">
					<li className="nav-item active">
						<Link className="nav-link" to="/">
							Home
							<span className="sr-only">(current)</span>
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/post/create">
							Create Post
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Menu;
