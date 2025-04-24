import axios from 'axios';

export const fetchCryptos = async () => {
  const response = await axios.get(
    'https://api.coingecko.com/api/v3/coins/markets',
    {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 5,
        page: 1,
        sparkline: true,
        price_change_percentage: '1h,24h,7d',
      },
    }
  );
  return response.data;
};
