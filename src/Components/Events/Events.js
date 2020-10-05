import React, { useEffect, useState } from 'react';
import EventList from './EventList';

const Events = () => {

    const [events,setEvents] = useState([]);

    useEffect(() => {
        fetch('https://pure-savannah-61339.herokuapp.com/events')
        .then(res => res.json())
        .then(result => setEvents(result))
    },[])

    return (
       <div className="container">
            <div className="row">
                    {
                            events.map(ev => <EventList 
                                key={ev._id}
                                event={ev}
                                ></EventList>)
                        }
              
        </div>
       </div>
    );
};

export default Events;