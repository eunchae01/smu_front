import React from 'react';
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ['승', '패'],
  datasets: [{
      data: [11, 50],
      backgroundColor: ['#FF6384', '#36A2EB'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB']
  }]
};

const options= {
  responsive: false
  };

const donut= {
		expand: false,
		title: '50%'
	  }
    
function Graph_two(){
    return(
        <div>
             <p>11승 9패</p>
             <Doughnut data={data} options={options} style={{ position: "relative", width: "250px", height: "125px" }} donut={donut}/>
             
        </div>
    );
}

export default Graph_two;