import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { InputGroup } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const AddEvent = () => {
    const initialFormState = { id: null, title: '', description: '', imageFile:'' }
    const [eventData, setEventData] = useState(initialFormState)
    const [eventDate, setEventDate] = useState(new Date());
    

    const handleInputChange = (event) => {
        const { name, value } = event.target
    
        setEventData({ ...eventData,eventDate, [name]: value })
      }

  const  handleSubmitEvent = (e) => {
            e.preventDefault()
            if (!eventData.title || !eventData.description) return
            
            setEventData(initialFormState)

            console.log(eventData);

            fetch("http://localhost:5000/addEvent",{
                method:'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(eventData)
            })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        }


    return (
        <div style={{marginTop:'100px'}} className="d-flex justify-content-center align-items-center">
        <div className="col-1">
        </div>
        <div className="col-4"> 
            <form className="form-horizontal addEventForm" onSubmit={handleSubmitEvent}> 
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
                        value={eventData.imageFile}  onChange={handleInputChange} required/>
                        </div>
                     </div>
                <div className="form-group">
                    <input type="submit" value="Add Event" className="btn btn-primary"/>
                </div>
            </form> 
            
           
        </div>
        <div className="col-1">
        </div>
    </div>
    );
};

export default AddEvent;