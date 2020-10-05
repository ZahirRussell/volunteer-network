import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Alert, InputGroup } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from 'react-router-dom';

const AddEvent = () => {
    const initialFormState = { id: null, title: '', description: '', imageFile:'NoImage' }
    const [eventData, setEventData] = useState(initialFormState)
    const [eventDate, setEventDate] = useState(new Date());
    const history = useHistory()

    const handleInputChange = (event) => {
        const { name, value } = event.target
    
        setEventData({ ...eventData,eventDate, [name]: value })
      }

  const  handleSubmitEvent = (e) => {
            e.preventDefault()
            if (!eventData.title || !eventData.description) return
            
            setEventData(initialFormState)

            console.log(eventData);

            fetch("https://pure-savannah-61339.herokuapp.com/addEvent",{
                method:'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(eventData)
            })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                alert('Event Added successfully');
                history.push("/");
            })
        }


    return (
        <div className="d-flex justify-content-center align-items-center">
        <div className="col-1">
        </div>
        <div className="col-4 text-center"> 
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <Alert variant="success">
            <Alert.Heading>Add New Event</Alert.Heading>
            <hr></hr>
            <form className="form-horizontal" onSubmit={handleSubmitEvent}>               
                    <div className="form-group">
                        <label className="col-md-3 control-label">Title</label>
                        <div className="col-md-9">
                           <input type="text" id="title" name="title" className="form-control" 
                           value={eventData.title}  onChange={handleInputChange} required/>
                        </div>
                     </div>     
                     <br/>
                     <div className="form-group">
                       <label className="col-md-3 control-label">Date</label>
                        <div className="col-md-9">
                            <InputGroup>                            
                                <DatePicker selected={eventDate} onChange={date => setEventDate(date)} id="from" className="form-control" />
                                <InputGroup.Append>
                                <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faCalendar} /></InputGroup.Text>
                                </InputGroup.Append>                                
                            </InputGroup>
                        </div>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label className="col-md-3 control-label">Description</label>
                        <div className="col-md-9">
                        <input id="description" name="description" className="form-control" 
                        value={eventData.description}  onChange={handleInputChange} required/>
                        </div>
                     </div>
                     <br/>

                     <div className="form-group">
                        <label className="col-md-3 control-label">Image</label>
                        <div className="col-md-9">
                        <input id="imageFile" name="imageFile" className="form-control" 
                          value={eventData.imageFile}  readOnly/>
                        </div>
                     </div>
                <br></br>
            <div className="form-group">
                <div className="col-md-9 offset-md-1">                   
                    <input type="submit" value="Add Event" className="btn btn-primary"/>
                    </div>
                </div>
            </form> 
        </Alert>           
           
        </div>
        <div className="col-1">
        </div>
    </div>
    );
};

export default AddEvent;