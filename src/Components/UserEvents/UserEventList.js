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
            <span className="text-center">
                 <h3>You Have: {userEvents.length} events.</h3>
             </span>
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