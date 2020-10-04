import React from 'react';

const UserEventItems = (props) => {
    console.log(props);
    const {_id, eventTitle, eventDate} = props.event;

    return (
        <div>
             <h4>{eventTitle}</h4>
            <p>Date: {eventDate}</p>
            <br/>
            <button 
                className="main-button"
                onClick={() => props.removeUserEvent(_id)}
            >Cancel </button> 
        </div>
    );
};

export default UserEventItems;