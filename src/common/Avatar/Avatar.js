import React from 'react';
import PropTypes from 'prop-types';
import emptyAvatar from './empty-avatar.png'
import './Avatar.scss';

function Avatar(props) {
    const size=props.size  || 'sm';                    //'sm' if default
    const img=props.img || emptyAvatar;                //'emptyAvatar' if default
    const className = 'Avatar--' + size;

    return (
        <div>
            <img className={"Avatar "+className} src={img} />
        </div>

    )
}

Avatar.propTypes = {
    size: PropTypes.oneOf(['sm','md','lg'])
};

export default Avatar;