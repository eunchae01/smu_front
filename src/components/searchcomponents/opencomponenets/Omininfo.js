import React from 'react';

function Omininfo({minipic, spell1, spell2, lun1, lun2, champname}){
    return(
        <>
            <div className='Omininfo'>
                <div className='Ominipic'>{minipic}</div>
                <div className='Ospells'>
                    <div className='Ospell'>{spell1}</div>
                    <div className='Ospell'>{spell2}</div>
                </div>
                <div className='Oluns'>
                    <div className='Olun'>{lun1}</div>
                    <div className='Olun'>{lun2}</div>
                </div>
                <p className='Ochampname'>{champname}</p>
            </div>
        </>
    );
}

export default Omininfo;