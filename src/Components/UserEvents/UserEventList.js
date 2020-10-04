import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import UserEventItems from './UserEventItems';

const UserEventList = () => {
    const [userEvents,setUserEvents]=useState([]);
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  

    
    useEffect(() => {
        fetch('http://localhost:5000/userEvents?email='+loggedInUser.email,{
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
        fetch(`http://localhost:5000/deleteUserEvent/${id}`,{
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
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
         <h3>You Have: {userEvents.length} events.</h3>

             {
                    userEvents.map(event => <UserEventItems 
                        key={event._id}
                        removeUserEvent = {removeUserEvent}
                        event={event}></UserEventItems>)
                } 

        {/* {
            userEvents.map(event => <li>Id: {event._id} Title: {event.eventTitle} From:{new Date(event.eventDate).toDateString('dd/MM/yyyy')}</li>)
        }   */}

</div>
    );
};

export default UserEventList;