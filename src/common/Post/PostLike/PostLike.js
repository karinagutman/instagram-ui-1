import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './PostLike.scss';
import { UserContext } from '../../../user-context';
import config from '../../../config/index';

function PostLike(props) {
    const {user} = useContext(UserContext);
    const[likes,setLikes] = useState(props.likes);
    const[hasLikes,sethasLikes] = useState(hasUserLike());      

    function hasUserLike() {                                   //checks if user already liked the photo
        return props.likes.includes(user._id)
    }

    async function like() {
        const url = `${config.apiUrl}/posts/${props.postId}/likes/`;
        try {
            const res = await fetch(url, {
                method: 'POST',
                credentials: 'include'
            });
            return await res.json();
        } catch(err) {
            console.log(err)
        }
    }

    async function unlike() {
        const url = `${config.apiUrl}/posts/${props.postId}/likes/${user._id}`;
        try {
            const res = await fetch(url, {
                method: 'DELETE',
                credentials: 'include'
            });
            return await res.json();
        } catch(err) {
            console.log(err);
        }
    }

    async function setLikesStatus(status) {
        sethasLikes(status);
        try {
            const post = status ? await like() : await unlike();
             setLikes(post.likes);
        }catch(err) {
            console.log(err);

        } 
    }
    
    const likesClass = hasLikes ? `PostLike __heart--liked` : '';             //if already liked had class of red like
    return(
        <div className="likes" > 
            {likes.length}
            <span  className={`PostLike __heart ${likesClass}`}  onClick={()=> setLikesStatus(!hasLikes)}><FontAwesomeIcon icon={faHeart} /></span>
        </div>

    );
}

export default PostLike;