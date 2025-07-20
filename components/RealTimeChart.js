// components/RealTimeChart.js
import React, { useEffect, useRef, useState } from 'react';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const RealTimeChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Live Data 📊',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.3)',
        fill: true,
        tension: 0.4,
      }
    ]
  });

  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setChartData(prev => {
        const now = new Date();
        const timeLabel = now.toLocaleTimeString();
        const nextValue = Math.floor(Math.random() * 100);

        return {
          ...prev,
          labels: [...prev.labels.slice(-19), timeLabel],
          datasets: prev.datasets.map(ds => ({
            ...ds,
            data: [...ds.data.slice(-19), nextValue]
          }))
        };
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="bg-zinc-800 p-4 rounded-md">
      <h2 className="text-xl font-semibold mb-4 text-white">실시간 데이터 차트</h2>
      <Line data={chartData} />
    </div>
  );
};

export default RealTimeChart;
