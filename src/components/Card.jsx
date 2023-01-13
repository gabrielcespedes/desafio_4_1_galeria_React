import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';

const Card = (props) => {
    return (
        <div className="div_Card">
            <img src={props.url} alt="imagen de ave"></img>
            <h2>{props.title_image}</h2>
            <p>{props.description}</p>
            <Button variant="primary mb-2">Ver más</Button>            
        </div>
    )
}

export default Card;