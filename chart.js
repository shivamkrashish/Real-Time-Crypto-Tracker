import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const CryptoList = ({ cryptos }) => {
  return (
    <div className="container">
      {cryptos.map((crypto) => {
        const chartData = {
          labels: Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`),
          datasets: [
            {
              label: `${crypto.name} Price (7 Days)`,
              data: crypto.sparkline_in_7d.price, // You can modify this if your API returns 7-day data differently
              borderColor: 'rgba(75,192,192,1)',
              fill: false,
            },
          ],
        };

        return (
          <div key={crypto.id} className="crypto-card">
            <h2>{crypto.name} ({crypto.symbol})</h2>
            <p>Price: ${crypto.current_price}</p>
            <p>1h: {crypto.price_change_percentage_1h}%</p>
            <p>24h: {crypto.price_change_percentage_24h}%</p>
            <p>7d: {crypto.price_change_percentage_7d}%</p>
            <p>Market Cap: ${crypto.market_cap}</p>
            <p>24h Volume: ${crypto.total_volume}</p>
            <div className="chart">
              <Line data={chartData} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CryptoList;
