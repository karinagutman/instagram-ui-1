import React, { useEffect,useState, useContext } from 'react';
import  config from "../config/index";
import './PostPage.scss';
import Post from '../common/Post/Post';
import { useParams, Link } from 'react-router-dom';
import Avatar from '../common/Avatar/Avatar';
import { faPooStorm } from '@fortawesome/free-solid-svg-icons';
import PostComments from './PostComments/PostComments';

function PostPage(props) {
    const {id} = useParams();
    const[post, setPost] =  useState([]);
    

    useEffect( ()=> {

        async function getPost() {
            if(!id) {
                return;
            }
            
            try {
                const fetchedPost = await ( await fetch(`${config.apiUrl}/posts/${id}`,{
                    credentials: 'include'
                })).json();
                setPost(fetchedPost);
            } catch(err){
                console.log(err);

            }

        }
        getPost();
    },[id])
    

    return(
     <div className="PostPage">
        <div className="col-8">
            <img src={`${config.apiUrl}/posts/${post.image}`}/>
            <div>
                {post.description}
            </div>

        </div>
        <div>     
        <hr />
            <div className="comments   ">
                <PostComments postId={id}/>

            </div>
        </div>
         
     </div>
    );
}

export default PostPage;