import React from 'react';
import Ofirst from '../components/searchcomponents/opencomponenets/Ofirst';
import Opendragon from '../components/searchcomponents/opencomponenets/Opendragon';
import WinnerRate from './WinnerRate';



function ChampionRate(){
    return(
        <div>
            <Ofirst/>
        <WinnerRate/>
        <WinnerRate/>
        <WinnerRate/>
        <WinnerRate/>
        <WinnerRate/>
        {/* 용  */}
        <Opendragon/>
        <Ofirst/>
        <WinnerRate/>
        <WinnerRate/>
        <WinnerRate/>
        <WinnerRate/>
        <WinnerRate/>

        </div>
    );
}

export default ChampionRate;