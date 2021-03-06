import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';

const UserEventItems = (props) => {
    console.log(props);
    const {_id, eventTitle, eventDate} = props.event;

    return (
        <div className="col-md-4">
        <div className="card" style={{width: 20 + 'rem', marginTop:'20px'}}>
        <img style={{height:'223px'}} className="card-img-top" src={require(`../../images/NoImage.jpg`)} alt="" />                 
           <hr></hr>
            <div className="card-body">
                <h2 className="card-title">{eventTitle}</h2>
                 <strong>Date: {eventDate}</strong>
                        <Button className="btn-danger rounded-pill"  onClick={() => props.removeUserEvent(_id)}>
                                        <FontAwesomeIcon icon={faTrash}/> 
                                        &nbsp; Cancel
                        </Button> 
            </div>
        </div>
        </div> 
    );
};

export default UserEventItems;