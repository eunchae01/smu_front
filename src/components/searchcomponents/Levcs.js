import React from 'react';

function Levcs({level, cs, Kasi}){
    return(
        <>
            <div className='levcs'>
                <p className='level'>레벨{level}</p>
                <p className='cs'>{cs}CS</p>
                <p className='Kasi'>킬관여 {Kasi}%</p>
            </div>
        </>
    );
}

export default Levcs;