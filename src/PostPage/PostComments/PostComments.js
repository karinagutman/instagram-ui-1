import React, { useState, useEffect } from 'react';
import config from '../../config/index';
import './PostComments.scss';
import PostComment from './PostComment/PostComment';
import Post from '../../common/Post/Post';
import CommentCreate from './CommentCreate/CommentCreate';

function PostComments({postId}) {
    const [comments,setComments] = useState([]);

    useEffect( () => {
        if(!postId) {
            return;
        }
        getComments(postId);
    }, [postId]);

    async function getComments(postId) {
        const fatchedComments = await(await fetch(`${config.apiUrl}/posts/${postId}/comment`, {
            credentials: 'include'
        })).json();
        setComments(fatchedComments);
    }

    function onAddedComment(comment) {
        setComments([...comments,Comment]);
    }
    

    return(
        <div className="PostComments">
            {comments.map(comment => {
                return (<PostComment key={comment._id} data={comment} />)
            })}
            <hr className="mt-5"/>
            <CommentCreate postId={postId}/>
            
            
        </div>

    );
}

export default PostComments;