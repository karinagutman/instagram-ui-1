import React, {useState} from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Dialog from 'react-dialog';
import 'react-dialog/css/index.css';
import Avatar from '../../common/Avatar/Avatar';
import './ProfileEdit.scss';


function ProfileEdit({isOpen, onClose, ...props}) {
    
    return (
        isOpen 
        ? <Dialog
            title="Edit Profile"
            modal={true}
            onClose={onClose}
            buttons={
                [{
                    text: "Close",
                    onClick: onClose
                }]
            }
        >
            <div className="ProfileEdit">
                <Formik>
                    <Form>
                        <div className="form-group">
                            <div className="avatar">
                                <Avatar size="lg" />
                            </div>
                            <label htmlFor="newAvatar">Select new Avatar:</label>
                             <input type="file" className="form-control-file" id="newAvatar" name="newAvatar" />
                        </div>
                        <div className="form-group">
							<label htmlFor="bio">Update Bio</label>
							<Field as="textarea" className="form-control" name="bio" id="bio" />
							<ErrorMessage component="small" name="bio" className="PostCreate__form__error" />
						</div>
                        
                        <hr/>
                    </Form>
                </Formik>
                
               
            </div>
        </Dialog>
        : null
    );
}

ProfileEdit.defaultProps = {
    isOpen: false
};

export default ProfileEdit;
