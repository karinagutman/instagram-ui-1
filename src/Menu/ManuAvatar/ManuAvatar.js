import React, { useContext } from 'react';
import './ManuAvatar.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {UserContext} from '../../user-context';
import emptyAvatar from './empty-avatar.png'
import { Link } from 'react-router-dom';
import Avatar from '../../common/Avatar/Avatar';


function ManuAvatar() {

    const {user} = useContext(UserContext);
    return (
        <div className="ManuAvatar">
            <Link className="nav-link" to={`/profile/${user._id}`}>
                <Avatar size="sm" img={user.avatar} />			
            </Link>
            
        </div>
    );
}

export default ManuAvatar;