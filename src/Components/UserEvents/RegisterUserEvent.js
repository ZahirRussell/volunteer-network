import React, { useContext, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './EventForm.css';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const RegisterUserEvent = () => {
    const { register, handleSubmit, control,watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [eventDate, setEventDate] = useState(new Date());
    const {title} = useParams();
    const history = useHistory()

    const [submittedData, setSubmittedData] = React.useState({});

    const onSubmit = data => {
        console.log(data);
        setSubmittedData(data);
        fetch('https://pure-savannah-61339.herokuapp.com/registerEvent', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(data => {
            if(data){             
              alert('Registered successfully');
              history.push("/UserEventList");
            }
          })
    };
    return (
        <div className="container">  
          <div className="col-2">
          </div>
          <div className="col-4"> 
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <form className="event-form" onSubmit={handleSubmit(onSubmit)}>
               <h4 class="text-center">Register Event</h4>
                <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
                {errors.name && <span className="error">Name is required</span>}
                
                <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })}  placeholder="Your Email"/>
                {errors.email && <span className="error">Email is required</span>}
                
                                           
                 {/* <ReactDatePicker name="eventDate" selected={eventDate} onChange={date => setEventDate(date)} id="eventDate" ref={register({ required: true })} />
                {errors.eventDate && <span className="error">Date is required</span>} */}
                <input  name="eventDate" defaultValue={eventDate} type="date" id="eventDate" ref={register({ required: true })}></input>
                {errors.eventDate && <span className="error">Date is required</span>}

                <input name="eventTitle" defaultValue={title} ref={register({ required: true })}  placeholder="Your Event" />
                {errors.eventTitle && <span className="error">Event Title is required</span>}
                
                <input name="books" ref={register()}  placeholder="Description"/>
               
                
                <Button type="submit" variant="primary" className="mx-2">Submit</Button>
            </form>
          </div> 
          <div className="col-2">
          </div>        
                          
        </div>
    );
};

export default RegisterUserEvent;