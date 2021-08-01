import React, {useRef, useEffect} from 'react';
import { Chart, registerables } from 'chart.js';
import { Line } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [

    {
      label: "Tier graph",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "cornflowerblue"
    }
  ]
};

function Test(){
    return(
        <div>
                  <Line width='1500' height='150' data={data} />
        </div>
    );
}

export default Test;