import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import Badge from 'react-bootstrap/Badge';

const Footer = () => {
    return(
        <div className="div_footer">
            <h3>Aves del Mundo <span><Badge bg="secondary">Ver aplicación móvil</Badge></span> </h3>            
        </div>        
    )
}

export default Footer;