import React from 'react';
import { Card, CardDeck, Col, Image, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import {NoImage} from '../../images/NoImage.jpg'


const EventList = (props) => {
    console.log(props);
    const {_id, title, description, eventDate, imageFile } = props.event;
    const history = useHistory();
    const handleUserEvents = (title)=>{
        const url = `/RegisterUserEvent/${title}`;
        history.push(url);
    }

    const colors = ["green","yellow","red","purple","orange","pink","cyan"];

    const getColor = ()=>{
        var len = colors.length;
        var randomNum = Math.floor(Math.random()*len);
        var color = colors[randomNum];
        colors.splice(randomNum, 1);
        return color;
    }
   
    return (
        <>

            <div className="col-md-3" onClick={() =>handleUserEvents(title)}>
                <div className="card" style={{width: 16 + 'rem', marginTop:'20px',backgroundColor: getColor()}}>
                  
                    <img style={{height:'220px'}} className="card-img-top" src={require(`../../images/${imageFile}.png`)} alt="" /> 
                                   
                    <div className="card-body">
                        <h5 className="card-title" style={{color:'white'}}>{title}</h5>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default EventList;