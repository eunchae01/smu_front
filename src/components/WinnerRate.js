import React from 'react';

import Openteam from '../components/searchcomponents/opencomponenets/Openteam';

import Oteam from '../components/searchcomponents/opencomponenets/Oteam';
import Otier from '../components/searchcomponents/opencomponenets/Otier';
import Okda from '../components/searchcomponents/opencomponenets/Okda';
import Ograph3 from '../components/searchcomponents/opencomponenets/Ograph3';
import Oward from '../components/searchcomponents/opencomponenets/Oward';
import Ocs from '../components/searchcomponents/opencomponenets/Ocs';
import Oitem from '../components/searchcomponents/opencomponenets/Oitem';

function WinnerRate(){
    return(
        <div>
                    <Openteam/>
        <Oteam/>
        <Otier/>
        <Okda/>
        <Ograph3/>
        <Oward/>
        <Ocs/>
        <Oitem/>
        </div>
    );
}

export default WinnerRate;