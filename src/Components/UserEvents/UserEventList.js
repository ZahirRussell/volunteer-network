import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import UserEventItems from './UserEventItems';

const UserEventList = () => {
    const [userEvents,setUserEvents]=useState([]);
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  

    
    useEffect(() => {
        fetch('https://pure-savannah-61339.herokuapp.com/userEvents?email='+loggedInUser.email,{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setUserEvents(data)
        });
    },[])

    const removeUserEvent = (eventId) => {
        const newEvent = userEvents.filter(ev => ev._id !== eventId);
        setUserEvents(newEvent);
        removeFromDatabase(eventId);
    }

    const removeFromDatabase = (id) =>{
        fetch(`https://pure-savannah-61339.herokuapp.com/deleteUserEvent/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });
    }
    return (
        <div className="container">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div class="alert alert-success" role="alert"> 
             <h3><FontAwesomeIcon icon={faInfoCircle}/>&nbsp;  Hi {loggedInUser.name}! You have registered for: <span class="badge badge-pill badge-primary"> {userEvents.length}</span> events.</h3>
            </div>
             <div className="row">             
                {
                    userEvents.map(event => <UserEventItems 
                        key={event._id}
                        removeUserEvent = {removeUserEvent}
                        event={event}></UserEventItems>)
                } 
             </div>
    </div>
    );
};

export default UserEventList;