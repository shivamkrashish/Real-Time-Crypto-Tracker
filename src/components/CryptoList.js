import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const CryptoList = ({ cryptos }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price (USD)</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Circulating Supply</th>
            <th>Max Supply</th>
            <th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {cryptos.map((crypto, index) => (
            <tr key={crypto.id}>
              <td>{index + 1}</td>
              <td><img src={crypto.image} alt={crypto.name} width="25" /></td>
              <td>{crypto.name}</td>
              <td>{crypto.symbol.toUpperCase()}</td>
              <td>${crypto.current_price.toLocaleString()}</td>

              <td className={crypto.price_change_percentage_1h_in_currency > 0 ? 'green' : 'red'}>
                {crypto.price_change_percentage_1h_in_currency?.toFixed(2)}%
              </td>
              <td className={crypto.price_change_percentage_24h_in_currency > 0 ? 'green' : 'red'}>
                {crypto.price_change_percentage_24h_in_currency?.toFixed(2)}%
              </td>
              <td className={crypto.price_change_percentage_7d_in_currency > 0 ? 'green' : 'red'}>
                {crypto.price_change_percentage_7d_in_currency?.toFixed(2)}%
              </td>

              <td>${crypto.market_cap.toLocaleString()}</td>
              <td>${crypto.total_volume.toLocaleString()}</td>
              <td>{crypto.circulating_supply?.toLocaleString()}</td>
              <td>{crypto.max_supply ? crypto.max_supply.toLocaleString() : '∞'}</td>

              <td>
                {crypto?.sparkline_in_7d?.price ? (
                  <Line
                    data={{
                      labels: crypto.sparkline_in_7d.price.map((_, i) => i),
                      datasets: [
                        {
                          data: crypto.sparkline_in_7d.price,
                          borderColor:
                            crypto.price_change_percentage_7d_in_currency > 0 ? 'green' : 'red',
                          borderWidth: 1,
                          pointRadius: 0,
                          fill: false,
                        },
                      ],
                    }}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: { display: false },
                      },
                      scales: {
                        x: { display: false },
                        y: { display: false },
                      },
                    }}
                    height={50}
                    width={100}
                  />
                ) : 'N/A'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoList;
