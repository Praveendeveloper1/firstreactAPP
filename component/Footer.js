import React from 'react';

const Footer = (props) =>{
     console.log(props)
     return (
        <React.Fragment>
            <center>
                 <hr/> 
                 <h2>&copy; Footer {props.year} {props.month} </h2>
            </center>
        </React.Fragment>
     )
}

export default Footer;