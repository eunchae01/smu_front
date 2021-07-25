import React from 'react';
import './item.css';

function item(){
    

    return(

        
        <div>
            <div className='searchBox'>
            <input className='inputBox' placeholder='챔피언 이름을 입력해주세요.'/>
            <button type='submit' className='searchBtn'>검색하기</button>
        </div>



        </div>
    );
}

export default item;