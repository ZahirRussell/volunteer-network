import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import Events from '../Events/Events';

const Home = () => {
    return (
        <div className="container">  
        <br></br>    
        <br></br>    
        <br></br>      
            <span className="text-center">
            <h1>I Grow by helping people in need </h1>
               <div>
                   <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Recipient's username"
                    aria-label="Amount (to the nearest dollar)"
                    />
                    <InputGroup.Append>
                    <InputGroup.Text>Search</InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
               </div>
            </span>
            <Events></Events>
        </div>
    );
};

export default Home;