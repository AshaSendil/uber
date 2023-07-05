import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'; // Import the "auto" module for automatic scale registration


const drivers = [
  { id: 1, name: 'Driver 1', latitude: 37.7749, longitude: -122.4194 },
  { id: 2, name: 'Driver 2', latitude: 34.0522, longitude: -118.2437 },
  { id: 3, name: 'Driver 3', latitude: 40.7128, longitude: -74.0060 },
  { id: 4, name: 'Driver 4', latitude: 51.5074, longitude: -0.1278 },
  { id: 5, name: 'Driver 5', latitude: 48.8566, longitude: 2.3522 }
];

const Graph = () => {
  const chartData = {
    labels: drivers.map(driver => driver.name),
    datasets: [
      {
        label: 'Latitude',
        data: drivers.map(driver => driver.latitude),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Longitude',
        data: drivers.map(driver => driver.longitude),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      }
    ]
  };

  // Chart options
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className="flex flex-col">
      <div className="max-w-md mx-auto">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Graph;
