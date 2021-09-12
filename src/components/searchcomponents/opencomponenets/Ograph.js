import React from 'react';
import {VictoryBar} from 'victory';
// 용에있는그래프


const data = [
    { vacationSpot: "산", vote: 50 },

  ];

const Chart = () => {
    return (
      <div>
        <VictoryBar horizontal data={data} x="vacationSpot" y="vote" />
      </div>
    );
  };

function Ograph(){
    return(
        <div>

        <VictoryBar horizontal data={data} x="vacationSpot" y="vote" width='250' height='10' style={{data: { fill: "#f0abbc" }
    }}/>

        </div>
    );
}

export default Ograph;