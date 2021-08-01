import React from 'react';
import '../itemcomponents/itembox.css'

function Itembox(){
    return(
    <div>
        <div className='itemBtnbox'>
        <button className='itemBtn'>TOP</button>
        <button className='itemBtn'>JUNGLE</button>
        <button className='itemBtn'>MID</button>
        <button className='itemBtn'>BOT</button>
        <button className='itemBtn'>SUP</button>
        </div>
    </div>
    );
}

export default Itembox;