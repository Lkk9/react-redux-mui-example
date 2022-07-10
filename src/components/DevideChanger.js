import React from 'react';
import {Button, IconButton, Stack} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useSelector, useDispatch} from 'react-redux';
import {decDevideNumber} from '../actions/decDevideNumber';
import {incDevideNumber} from '../actions/incDevideNumber';
import {devideSliderValue} from '../actions/devideSliderValue';

const DevideChanger = () => {
  const devideNumber = useSelector(state => state.devideNumber)
  const dispatch = useDispatch()

  return <Stack spacing={2} direction="row">
    <Button
      variant="contained"
      onClick={() => dispatch(devideSliderValue(devideNumber))}
    >
    devide by {devideNumber}
    </Button>

    <IconButton
      variant="contained"
      onClick={() => dispatch(incDevideNumber())}
    >
      <AddIcon />
    </IconButton>
    <IconButton
      variant="contained"
      onClick={() => dispatch(decDevideNumber())}
    >
      <RemoveIcon />
    </IconButton>
  </Stack>
}

export default DevideChanger;
