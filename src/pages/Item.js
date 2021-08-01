import {React,useState} from 'react';
import './item.css';
import Itembox from '../components/itemcomponents/Itembox';

function Item(){
    
    const [itemSearching,setItemSearching] = useState(false)
    const onClick = () => {
        setItemSearching(true)
    }

    return(

        
        <div>
            <div className='searchBox'>
                <input className='inputBox' placeholder='챔피언 이름을 입력해주세요.'/>
                <button onClick={onClick} type='submit' className='searchBtn'>검색하기</button>
                {itemSearching && <Itembox/>}
            </div>
            
        


        </div>
    );
}

export default Item;