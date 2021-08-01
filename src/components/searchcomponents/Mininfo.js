import React from 'react';

function Mininfo({minipic, spell1, spell2, lun1, lun2, champname}){
    return(
        <>
            <div className='mininfo'>
                <div className='minipic'>{minipic}</div>
                <div className='spells'>
                    <div className='spell'>{spell1}</div>
                    <div className='spell'>{spell2}</div>
                </div>
                <div className='luns'>
                    <div className='lun'>{lun1}</div>
                    <div className='lun'>{lun2}</div>
                </div>
                <p className='champname'>{champname}</p>
            </div>
        </>
    );
}

export default Mininfo;