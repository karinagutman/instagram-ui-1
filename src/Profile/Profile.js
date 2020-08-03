import React, { useEffect,useState, useContext } from 'react';
import config from "../config/index";
import {useParams} from 'react-router-dom';
import './Profile.scss';
import ManuAvatar from '../Menu/ManuAvatar/ManuAvatar';
import Feed from '../Feed/Feed';
import { UserContext } from '../user-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import Avatar from '../common/Avatar/Avatar';
import ProfileUser from './ProfileUser/ProfileUser';
import Post from '../common/Post/Post';


function Profile() {
    const {id} = useParams();
    const [posts, setPosts] = useState([]);
    

    useEffect(() => {

        async function getPostsById() {
            try {
                const data = await (await fetch(config.apiUrl + '/users/'+ id + '/posts?sort=-1', {
                    credentials: 'include'
                })).json();
                console.log(data);
                
                setPosts(data);
            } catch(err) {
                console.log(err);
            }
        }
        if(!id) {
            return;
        }
        getPostsById();
    }, [id]);

    return (
        <div className="Profile">
            <ProfileUser userId={id} postsNum={posts.length} />

             <hr className="mx-3 my-4" />

            <div className="d-flex flex-wrap">   
                {posts.map(post => {
                    return <Post key={post._id} data={post} />
                })}
             </div>
            
            
        </div>
    );
}

export default Profile;