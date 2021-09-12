import React from 'react';
import {Link} from 'react-router-dom';
import './complex.css';

function Complex2(){
    return(
        <div>
            <div className='comContainer'>
        <div className='comBtn'>
            <Link to ='/complex'>
            <button className='lineBtn' id='line'>라인전</button>
            </Link>
            <Link to ='./complex2'>
                <button className='lineBtn' id='hanta'>한타</button>
            </Link>
        </div>

        <div className='comBox'>
            {/* <ChampionList/> */}
        </div>
        </div>
        </div>
    );
}

export default Complex2;