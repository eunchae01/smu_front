import React from 'react';
import './history.css';

function History({type, when, result}){
    return(
        <>
        <div className='allInfo'>
            <div className='allLeft'>
                <p className='type'>{type}</p>
                <p className='when'>{when}일 전</p>
                <p className='result'>{result}</p>
            </div>
        </div>
        </>
    );
}

export default History;