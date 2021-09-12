
import React, {Component} from 'react';


function Openbutton({onClick,clicked}){

    return(
        <div>
            <button className='openbutton' onClick={onClick}>{clicked ? "^" : "v" }</button>
            
        </div>
    );

}

export default Openbutton;