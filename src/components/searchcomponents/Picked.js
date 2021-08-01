import React from 'react';
import './picked.css';

function Picked({pickedpic, champname, pickedrate, win, lose, grade}){
    return(
        <>
        <div className='picked'>
            <div className='pickedpic'>{pickedpic}</div>
            <div classNmae='infos'>
                <div className='champname'>{champname}</div>
                <div className='pickedrate'>{pickedrate}</div>
                    <div className='winlose'>
                        ({win}승 {lose}패)
                    </div>
                <div className='grade'>{grade} 평점</div>
            </div>
        </div>
        </>
    );
}

export default Picked;