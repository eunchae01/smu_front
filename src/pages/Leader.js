import React from 'react';
import './leader.css';

function leader(){
    return(
        <>
        <div className='leaderBtn'>
            <button type='submit' className='searchBtn'>내 아이디 등록하기</button>
        </div>

        <div className='ldBox'>
            <input className='inputBox' placeholder='소환사 이름을 입력해주세요.'/>
            <button type='submit' className='searchBtn'>검색하기</button>
        </div>
        </>
    );
}

export default leader;