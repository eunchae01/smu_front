import React,{useEffect,useState} from 'react';
import Recommand from './Recommand';

function ListRecommand(){



    return(
        <div className='rebox3'>
            <Recommand reRate='40%'/>
            <Recommand reRate='30%'/>
            <Recommand reRate='30%'/>
        </div>
    );
}

export default ListRecommand;