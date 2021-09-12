import React,{useEffect,useState} from 'react';
import ListRecommand from './ListRecommand';
import axios from "axios"


function OutCome({isClicked,imageUrl}){
    const [data,setData] = useState([])
    
    useEffect(() => {
        console.log(imageUrl)    
        setData([])
    }, [isClicked,imageUrl])

    return(
        <div className='outcome'>
        <p className='outP'>{isClicked}</p>
        { imageUrl === "d" ? 
        <div></div>
        :        <div>
        <img src={imageUrl} className='box1'/>
        <div className='box2' >
            <ListRecommand data = {data}/>
        </div>
        </div>
        }
    </div>
    );
}

export default OutCome;