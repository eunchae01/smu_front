import React from 'react';
import './history.css';

function Team({pic1, pic2, pic3, pic4, pic5, ID1, ID2, ID3, ID4, ID5}){
    return(
        <>
            {/* 블루팀레드팀구분? */}
            <div className='teampic'>
                <div className='teamPic'>{pic1}</div>
                <div className='teamPic'>{pic2}</div>
                <div className='teamPic'>{pic3}</div>
                <div className='teamPic'>{pic4}</div>
                <div className='teamPic'>{pic5}</div>
            </div>

            <div className='teamname'>
                <p className='teamName'>{ID1}</p>
                <p className='teamName'>{ID2}</p>
                <p className='teamName'>{ID3}</p>
                <p className='teamName'>{ID4}</p>
                <p className='teamName'>{ID5}</p>
            </div>
        </>
    );
}

export default Team;