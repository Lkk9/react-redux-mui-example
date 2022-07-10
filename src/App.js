import React from 'react';
import ValueSlider from './components/ValueSlider';
import DevideChanger from './components/DevideChanger';
import {Box} from '@mui/material';

const App = () => {

  return <Box
    sx={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: 2
  }}
  >
    <DevideChanger />
    <ValueSlider />
  </Box>
}

export default App;
