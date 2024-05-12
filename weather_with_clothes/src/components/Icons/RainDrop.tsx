import React from 'react';
import WaterDropIcon  from '@mui/icons-material/WaterDrop';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import WaterDropTwoToneIcon from '@mui/icons-material/WaterDropTwoTone';

export default function RainDrop({percent}) {
  
  let raindropIcon:any = "";

  if(percent < 31){
    raindropIcon = <WaterDropOutlinedIcon/>
  } else if (percent < 71) {
    raindropIcon = <WaterDropTwoToneIcon/>
  } else {
    raindropIcon = <WaterDropIcon/>
  }

  return (
    <span>{raindropIcon}</span>
  )
}
