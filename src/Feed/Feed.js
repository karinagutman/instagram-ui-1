import React, { useEffect, useState } from 'react';
import config from "../config/index";
import './Feed.scss';
import Post from '../common/Post/Post';

function Feed(props) {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        async function getAll() {
            try {
                const res = await fetch(`${config.apiUrl}/posts?sort=-1`, {
					credentials: 'include'
				});
                const data = await res.json();
                setPosts(data);
            } catch(err) {
                console.log(err);
            }
        }
        
        getAll();
    }, []);

    return (
        <div class="feed ">
            <div class="container d-flex flex-wrap">
                {posts.map(post => {
                    return <Post key={post._id} data={post} />
                })}

            </div>
        </div>
    );

 }

export default Feed;