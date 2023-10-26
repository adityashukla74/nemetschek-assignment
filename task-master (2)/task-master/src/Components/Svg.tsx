import React, { useState } from 'react';
import floorPlan from '../assets/floor_plan.svg';

const SvgComponent = () => {

  return (
    <div>
      <img src={floorPlan} alt='floor_plan' />
    </div>
  )
}

export default SvgComponent;
