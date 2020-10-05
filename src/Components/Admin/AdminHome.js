import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const AdminHome = () => {

    const [events,setEvents] = useState([]);

    useEffect(() => {
        fetch('https://pure-savannah-61339.herokuapp.com/userAllEvents')
        .then(res => res.json())
        .then(result => setEvents(result))
    },[])

    const handleDelete = (eventId) => {
        const newEvent = events.filter(ev => ev._id !== eventId);
        setEvents(newEvent);
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
            <div className="mt-5">
                <h3>Create New Event</h3>
                <Link to="/addEvent">
                    <Button variant="primary" className="mx-2">Add Event</Button>
                </Link>
            </div>
            <div className="mt-5">
                <table className="table table-responsive">
                    <thead className="thead-light"> 
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Date</th>
                            <th scope="col">Registered Event</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {
                            events.map(ev =>
                                <tr key={ev._id}>
                                    <td>{ev.name}</td>
                                <td>{ev.email}</td>
                                    <td>{ev.eventDate}</td>
                                    <td>{ev.eventTitle}</td>
                                    <td>
                                    {/* <button type="button" class="btn btn-danger" aria-label="Left Align" onClick={() => handleDelete(ev._id)}>
                                        <span class="fa fa-trash-o fa-lg" aria-hidden="true"></span> Delete
                                    </button> */}
                                     <Button className="btn-danger rounded-pill" onClick={() => handleDelete(ev._id)}>
                                        <FontAwesomeIcon icon={faTrash}/> 
                                        &nbsp; Delete
                                    </Button> 
                                    </td>
                                </tr>
                                )
                        }

                    </tbody>
                </table>
            </div>
        </div> 
    );
};

export default AdminHome;