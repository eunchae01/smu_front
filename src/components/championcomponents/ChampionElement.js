import React from 'react';
import './ChampionElement.css';
const ChampionElement = ({ imageUrl, name, id, onClick }) => {
    return (
        <div width='100px' height='100px'>
            <img
                className='getimg'
                src={imageUrl}
                height='280'
                width='180'
                alt={name}
                onClick={onClick}
                id={id}
            />
            <div className='imagename'>{name}</div>
        </div>
    );
};

export default ChampionElement;
