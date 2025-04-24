import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCryptos, setLoading } from './features/cryptoslice';
import { fetchCryptos } from './api/cryptoApi';
import CryptoList from './components/CryptoList';
import './App.css';
import { motion } from 'framer-motion';

<motion.h1
  className="heading"
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
>
  📈 Real-Time Crypto Tracker
</motion.h1>

const App = () => {
  const dispatch = useDispatch();
  const { cryptos, loading } = useSelector((state) => state.crypto);

  const getCryptos = async () => {
    dispatch(setLoading());
    const data = await fetchCryptos();
    dispatch(setCryptos(data));
  };

  useEffect(() => {
    getCryptos();

    const interval = setInterval(() => {
      getCryptos();
    }, 60000); // 60 seconds

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="App">
      <h1 className='heading'>📈 Real-Time Crypto Tracker</h1>
      {loading ? <p className="loading">Loading...</p> : <CryptoList cryptos={cryptos} />}
      <p className='para'>© 2025 Shivam's Crypto App</p>
    </div>
  );
};

export default App;
