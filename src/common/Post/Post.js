import React from 'react';
import './Post.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle,faHeart } from '@fortawesome/free-solid-svg-icons'
import config from '../../config/index';
import DateFormat from '../DateFormat/DateFormat';
import PostLike from './PostLike/PostLike';
import Avatar from '../Avatar/Avatar';
import { Link } from 'react-router-dom';

function Post(props) {

    return  (
        <div className="Post container col-12 col-md-4">
           <article className="Post">
                <header>
                    <div className="Post__user">
                        <Link to={`/profile/${props.data.user._id}`}>
                            <Avatar size="md" img={props.data.user.avatar} />
                        </Link>
                    </div>
                    <div className="Post__date date d-flex justify-content-end">
                        <DateFormat value={props.data.createdAt} />
                    </div>
                </header>
                <div className="Post__image">
                     <Link to={`/post/${props.data._id}`}>
                        <img  src={`${config.apiUrl}/posts/${props.data.image}`}/>
                     </Link>
                </div>
                <div className="Post__actions  d-flex justify-content-end">
                     <PostLike postId={props.data._id} likes={props.data.likes}/>
                </div>
                <div className="Post__content">
					<h1 className="Post__description">{props.data.description}</h1>
				</div>
            </article>
        </div>
    );

}


export default Post;