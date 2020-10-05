import React from 'react';
import {NoImage} from '../../images/NoImage.jpg'

const CustomImage = () => {
    let image_path = '';  
        try {  
            image_path = require('../../images/'); 
        } catch(err){  
            image_path = require({NoImage}); 
        } 

    return (
        <div>
             <img width={this.props.width} src={image_path} className={this.props.className} alt={this.props.alt} /> 
        </div>
    );
};

export default CustomImage;