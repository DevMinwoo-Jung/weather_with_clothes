import React from 'react';
import WaterDropIcon  from '@mui/icons-material/WaterDrop';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import WaterDropTwoToneIcon from '@mui/icons-material/WaterDropTwoTone';

export default function RainDrop({percent}:any) {
  
  let raindropIcon:any = "";

  if(percent < 31){
    raindropIcon = <WaterDropOutlinedIcon fontSize='small'/>
  } else if (percent < 71) {
    raindropIcon = <WaterDropTwoToneIcon fontSize='small'/>
  } else {
    raindropIcon = <WaterDropIcon fontSize='small'/>
  }

  return (
    <span className='pr-1'>{raindropIcon}</span>
  )
}
