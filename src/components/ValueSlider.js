import React from 'react';
import {Slider, Typography} from '@mui/material';
import {useSelector, useDispatch} from 'react-redux';
import {setSliderValue} from '../actions/setSliderValue';

const ValueSlider = () => {
  const sliderValue = useSelector(state => state.sliderValue)
  const dispatch = useDispatch()

  return <>
    <Slider
      sx={{width: 1/4}}
      value={sliderValue}
      onChange={(e) => dispatch(setSliderValue(e.target.value))}
    />
    <Typography>
      Current value: {sliderValue}
    </Typography>
  </>
}

export default ValueSlider;
