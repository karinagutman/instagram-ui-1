import React, { useState, useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {CommentCreateSchema} from './comment-create.schema';
import config from '../../../config/index';
import './CommentCreate.scss';
import Avatar from '../../../common/Avatar/Avatar';
import { UserContext } from '../../../user-context';

function CommentCreate({postId,onAdd}) {
    const {user} = useContext(UserContext);

    async function submit(values,{resetForm}) {
        const newComment = await(await fetch (`${config.apiUrl}/posts/${postId}/comment`), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(values)
        }).json();
        onAdd(newComment);
        resetForm();                            //return the form to initial values 
    }
    return(
        <div className="CommentCreate container-fluid">
            <Formik
            initialValues={{content: ''}}
            validationSchema={CommentCreateSchema}
            onSubmit={submit}>
                {({ isSubmitting }) => (
        
                <Form className="CommentCreate__form  row align-items-center ">
                    <div className="form-group d-flex">
                        <div className="mr-2">
                            <Avatar size="sm" img={user.avatar}/>
                        </div>
                        <Field type="textarea" name="content" classname="" placeholder="Add a comment..."></Field>
                    </div>
                    <div className="form-group text-right">
                        <button type="submit" className="ml-2 btn-sm btn-primary "
                                disabled={isSubmitting} >
                                    Post
                        </button>
                    </div>
                </Form>
                )}
            </Formik>

        </div>
    );
}

export default CommentCreate;