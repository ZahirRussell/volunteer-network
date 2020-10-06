import React from 'react';
import { useHistory } from 'react-router-dom';


const EventList = (props) => {
    console.log(props);
    const {title,  imageFile } = props.event;
    const history = useHistory();
    const handleUserEvents = (title)=>{
        const url = `/RegisterUserEvent/${title}`;
        history.push(url);
    }

    const colors = ["green","#FFBD3E","red","purple","orange","pink","cyan"];

    const getColor = ()=>{
        var len = colors.length;
        var randomNum = Math.floor(Math.random()*len);
        var color = colors[randomNum];
        colors.splice(randomNum, 1);
        return color;
    }
   
    return (
        <>
        <div className="col-md-3 col-sm-6" onClick={() =>handleUserEvents(title)}>
				<div className="event-card">
					<img style={{ maxWidth: "100%" }} src={require(`../../images/${imageFile}.png`)} alt="" />
					<h4 style={{background: getColor()}}>{title}</h4>
				</div>
		</div>
        </>
    );
};

export default EventList;