import React from 'react';

function Score({kill, death, assi, gra}){
    return(
        <>
             <div className='score'>
                <p className='KDA'>{kill}/{death}/{assi}</p>
                <p className='gra'>{gra}:1 평점</p>
            </div>
        </>
    );
}

export default Score;