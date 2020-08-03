import React, { useState } from 'react';
import './PostComment.scss';
import CommentCreate from '../CommentCreate/CommentCreate';
import Avatar from '../../../common/Avatar/Avatar';

function PostComment({postId}) {
    
    return(
        <div>
            <Avatar />
            <strong></strong>
        </div>
    );
}

export default PostComment;