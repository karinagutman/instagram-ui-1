import React, { useEffect,useState, useContext } from 'react';
import './SearchResult.scss';
import Avatar from '../../common/Avatar/Avatar';
import { UserContext } from '../../user-context';
import { Link } from 'react-router-dom';
import ProfileUser from '../../Profile/ProfileUser/ProfileUser';


function SearchResult(props) {

    return(
        <div className="col-lg-4" key={props.user._id}>
            <div className="SearchResult d-flex">
                <div className="SearchResult__avatar">
                    <Link to={`/profile/${props.user._id}`}>
                    <Avatar size='md' img={props.user.avatar}/>
                    </Link>
                </div>
                       
                <div>
                    <h4>{ props.user.username }</h4>
                     <p ></p>
                </div>
            </div>
        </div>
        

    );
}

export default SearchResult;