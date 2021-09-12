import React from 'react';

function Recommand({reRate}){

    return(
        <>
        <div className='recoBox'>
            <div className='reBox'></div>
            <div className='reBox'></div>
        </div>

        <p className='reRate'>{reRate}</p>
        </>
    );
}

export default Recommand;