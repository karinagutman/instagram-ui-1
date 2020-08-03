import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome,faPlusCircle,faUserCircle,faHeart,faSearch } from '@fortawesome/free-solid-svg-icons';
import ManuAvatar from './ManuAvatar/ManuAvatar';

function Menu() {
	return (
		<div className="Menu">
			<nav className="navbar navbar-dark bg-dark">
				<a className="navbar-brand" href="#">Instagram</a>

				<ul className="nav mr-auto">
					<li className="nav-item active">
						<Link className="nav-link" to="/">
						<FontAwesomeIcon icon={faHome} />
							
							<span className="sr-only">(current)</span>
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/post/create">
						<FontAwesomeIcon icon={faPlusCircle} />	
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/search">
						<FontAwesomeIcon icon={faSearch} />	
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="">
						<FontAwesomeIcon icon={faHeart} />
						</Link>
					</li>
					<li className="nav-item ">
						<ManuAvatar />
						
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Menu;
