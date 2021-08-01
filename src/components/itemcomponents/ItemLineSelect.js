import React from 'react';
import './itembox.css';

function ItemLineSelect(){

    const [itemLineSwitchng, setItemLineSwitching] = useState(false)
    const onClick = () => {
        console.log(clicked)
        setItemLineSwitching(true)
    }
    return(
        <div>
            <div className='itemLineBox'>

            </div>

        </div>
    )
}