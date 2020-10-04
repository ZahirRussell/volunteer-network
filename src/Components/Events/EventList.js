import React from 'react';
import { Card, CardDeck, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const EventList = (props) => {
    console.log(props);
    const {_id, title, description, eventDate, imageFile } = props.event;
    const history = useHistory();
    const handleUserEvents = (title)=>{
        const url = `/RegisterUserEvent/${title}`;
        history.push(url);
    }
   
    return (
        <>
           
                {/* <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
                        <Card style={{flex: 1}}>
                        <Card.Img variant="top" style={{width:'200px'}} src={require(`../../images/${imageFile}.png`)} />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            {title}
                            </Card.Text>
                            </Card.Body>
                        </Card>              
                    </CardDeck> */}
                    <Card style={{ width: 200 }} onClick={() =>handleUserEvents(title)}>
                        <Card.Img variant="top" style={{width:'200px'}} src={require(`../../images/${imageFile}.png`)} />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            {title}
                            </Card.Text>
                            </Card.Body>
                        </Card>
        </>
    );
};

export default EventList;