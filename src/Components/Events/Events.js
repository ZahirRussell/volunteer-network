import React, { useEffect, useState } from 'react';
import EventList from './EventList';

const Events = () => {

    const [events,setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/events')
        .then(res => res.json())
        .then(result => setEvents(result))
    },[])

    return (
        <div className="container">
                    {
                            events.map(ev => <EventList 
                                key={ev._id}
                                event={ev}
                                ></EventList>)
                        }
              
        </div>
    );
};

export default Events;