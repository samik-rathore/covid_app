import React, {useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
  
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  

  
const Chart = () => {
    const [dailyData, setDailyData] = useState({});

    useEffect(()=>{
        const fetchAPI = async()=>{
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    })

    
    const data = {
        labels: dailyData.dates,
        datasets: [
          {
            label: 'Dataset 1',
            data: dailyData.cases,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Dataset 2',
            data: dailyData.deaths,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };

    return (
    <div className={styles.container}>
        <Line data={data} />
    </div>
    );

  }

export default Chart;