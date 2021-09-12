import React,{useState,useEffect} from 'react'
import { Line } from "react-chartjs-2";
export default function ChampionRate({rate}) {
    const [data, setdata] = useState({
        labels: [ "10-20", "20-30", "30-40", "40-"],
        datasets: [
        ]
      });
      

    const [graphData,setGraphData] = useState(         {
        label: "Tier graph",
        data: [],
        fill: false,
        borderColor: "cornflowerblue"
      })
      useEffect(() => {
          console.log("111 ? >>",rate)
        setGraphData({...graphData, data : rate})
        setdata({...data,datasets:[graphData]})
      }, [rate])

    return (
        <div>
                      
                      <Line width='450' height='200' data={data} />
        </div>
    )
}
