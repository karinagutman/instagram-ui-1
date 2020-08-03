import React  from 'react';
import Moment from 'react-moment';

function DateFormat(props) { 
     return (
        <Moment fromNow>{props.value}</Moment>
    );
}

export default DateFormat;