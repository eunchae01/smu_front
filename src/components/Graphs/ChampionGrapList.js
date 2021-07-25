import React, { useEffect, useContext } from 'react';
import { Select } from '../../pages/Chamipon.js';
const ChampionGrapList = () => {
    const username = useContext(Select);
    console.log(username);
    useEffect(() => {
        console.log(username);
    }, [username]);

    return <div>this page is graphic part {username}</div>;
};

export default ChampionGrapList;
