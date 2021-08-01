import React from 'react';

function Item({item1, item2, item3, item4, item5, item6, item7}){
    return(
        <>
            <div className='item'>
                <div className='items'>{item1}1</div>
                <div className='items'>{item2}2</div>
                <div className='items'>{item3}3</div>
                <div className='items'>{item4}4</div>
                <div className='items'>{item5}5</div>
                <div className='items'>{item6}6</div>
                <div className='items'>{item7}7</div>
                <div className='items'>X</div>
            </div>
        </>
    );
}

export default Item;