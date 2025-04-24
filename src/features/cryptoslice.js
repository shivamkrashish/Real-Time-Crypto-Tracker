import { createSlice } from '@reduxjs/toolkit';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    cryptos: [],
    loading: false,
  },
  reducers: {
    setCryptos: (state, action) => {
      state.cryptos = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { setCryptos, setLoading } = cryptoSlice.actions;
export default cryptoSlice.reducer;
