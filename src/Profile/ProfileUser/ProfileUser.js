import React, { useEffect,useState, useContext } from 'react';

import config from "../../config/index";
import { UserContext } from '../../user-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import Avatar from '../../common/Avatar/Avatar';
import ProfileEdit from '../ProfileEdit/ProfileEdit';
import './ProfileUser.scss';
import { Link } from 'react-router-dom';


function ProfileUser(props) {

    const {user} = useContext(UserContext);
    const [profile, setProfile] = useState([]);
    const [isOpenEditProfile, setIsEditProfile] = useState(false);

    const closeEditProfile = () => setIsEditProfile(false);
    const openEditProfile = () =>  {
        console.log('open')
        setIsEditProfile(true);
    };

    useEffect( () => {
        getUser(props.userId);
    },[props.userId]);

    async function getUser(id){
        try {
            const res = await fetch(`${config.apiUrl}/users/${id}`,{
                credentials: 'include'
            });
            const fatchedUser = await res.json();
            setProfile(fatchedUser);
        } catch(err) {
            console.log(err);
        }
    }

     

    return(
        <div className="profileUser">
            <header className="d-flex flex-column flex-lg-row mt-2">
                <div className="profile-avatar col-12 col-lg-4 text-center">
                    <Avatar size="lg" img={profile.avatar}/>
                </div>
                <div className="profile-info col-12 col-lg-8 text-center text-lg-left">
                         <h2 className="h3 mt-2 ">{ profile.username }</h2>
                         <div>
                            <button className="btn  " onClick={openEditProfile}>
                                <FontAwesomeIcon icon={faEdit} />
                            </button>
                         </div>
                        <div className="info mt-3 row ">
                            <div className="item mr-3 mr-lg-5">{props.postsNum} posts </div>
                            <div className="item mr-3 mr-lg-5"> 0 followers </div>
                            <div className="item"> 0 following </div>
                        </div>
                        <p className="mt-3 text-muted">
						A very interesting profile
					    </p>
                 </div>
             </header>
             <ProfileEdit isOpen={isOpenEditProfile} onClose={closeEditProfile} />
        </div>
    );
}

export default ProfileUser;