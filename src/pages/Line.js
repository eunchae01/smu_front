import React from 'react';
import './line.css';

function line(){
    return(
        <>
        <div className='selectBg'>
            <select className='select'>
                <option value="1" >Top</option>
                <option value="2">Mid</option>
                <option value="3">Jungle</option>
                <option value="4">Bottom</option>
                <option value="5">Supporter</option>
            </select>
        </div>
        {/* <div className='lineBtnbox'>
            <button className='lineBtn'>Top</button>
            <button className='lineBtn'>Mid</button>
            <button className='lineBtn'>Jungle</button>
            <button className='lineBtn'>Ad-carry</button>
            <button className='lineBtn'>Supporter</button>
        </div> */}

        <div className='time'>
        <button className='timeBtn'>0 - 10min</button>
        <div className='printChamp'></div>
        <button className='timeBtn'>10 - 20min</button>
        <div className='printChamp'></div>
        <button className='timeBtn'>20 - 30min</button>
        <div className='printChamp'></div>
        <button className='timeBtn'>30 - 40min</button>
        <div className='printChamp'></div>
        <button className='timeBtn'>40min -</button>
        <div className='printChamp'></div>
        </div>

        <div className='footer'></div>
        </>
    );
}

export default line;