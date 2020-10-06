import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import EventList from './EventList';

const Events = () => {

    const [events,setEvents] = useState([]);

    useEffect(() => {
        fetch('https://pure-savannah-61339.herokuapp.com/events')
        .then(res => res.json())
        .then(result => setEvents(result))
    },[])

    return (

    <main className="bg-home pt-5 mt-2">
			<div className="container text-center">
				<div className="search">
					<h2 className="display-5 mb-4">I grow by helping people in need.</h2>
					
                  <div>
                            <InputGroup className="mb-3">
                                <FormControl placeholder="Search..."/>
                                <InputGroup.Append>
                                <InputGroup.Text style={{background:'#3F90FC',color:'#fff'}}>Search</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </div>
				</div>
				<div className="py-5 mt-2">
					
						<div className="row">
                            {
                                events.map((ev) => (
                                    <EventList key={ev._id} event={ev}></EventList>
                                ))}
						</div>                   
				</div>
			</div>
		</main>
    );
};

export default Events;