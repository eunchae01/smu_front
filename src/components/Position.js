import React from 'react';
import './position.css'

// 티어 그래프 밑 선호포지션
function Position({Linepic, Linename, pickrate, winrate}){
    return(
        <>
        <div className='pick'>
            <div className='Linepic'>{Linepic}</div>
            <div classNmae='pack'>
                <div className='texts'>{Linename}</div>
                <div className='pickrate'>픽률 : {pickrate}</div>
                <div className='wonrate'>승률 : {winrate}</div>
            </div>
        </div>
        </>
    );
}

export default Position;