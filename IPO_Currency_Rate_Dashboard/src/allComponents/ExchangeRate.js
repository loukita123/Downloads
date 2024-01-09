import React, { useEffect, useState } from 'react';
import axios from 'axios';

const token = 'your_api_token_here';
const apiUrl = `https://api.iex.cloud/v1/fx/latest?symbols=USDCAD,GBPUSD,USDJPY&token=${token}`;

const ExchangeRate = () => {
  const [exchangeData, setExchangeData] = useState([]);

  useEffect(() => {
    const fetchExchangeData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setExchangeData(response.data);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchExchangeData();
  }, []);

  return (
    <div className="exchange-rate-container mt-5">
      <h2 className="exchange-rate-heading text-center mb-4" style={{ backgroundColor: '#4caf50', padding: '15px', color: '#fff' }}>
        Current Exchange Rates
      </h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Currency Pair</th>
              <th>Exchange Rate</th>
            </tr>
          </thead>
          <tbody>
            {exchangeData.map(({ symbol, rate, timestamp, isDerived }, index) => (
              <tr key={symbol}>
                <td>{index + 1}</td>
                <td>{symbol}</td>
                <td>{rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExchangeRate;
