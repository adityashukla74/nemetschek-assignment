import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';

import { ReactComponent as FloorPlan } from '../assets/floor_plan.svg';
import { hexColorToGeneralName, getRandomHexColor } from '../utils/colors';
import { LOCATION_IDS } from '../constants/floorplan';
import styles from './SvgComponent.module.scss';

const SvgComponent: React.FC = () => {
  const [isRotated, setIsRotated] = useState<boolean>(false);
  const [colorOptions, setColorOptions] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>('#a96845');

  const RotateOnToggle = () => {
    setIsRotated((prevIsRotated: boolean) => !prevIsRotated);
  };

  const StyleOnRotation = {
    transform: isRotated ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 1s ease',
  };

  useEffect(() => {
    const generateColors = Array.from({ length: 10 }, () => getRandomHexColor());
    setColorOptions(generateColors);
  }, []);

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newColor = e.target.value;
    setSelectedColor(newColor);

    LOCATION_IDS.forEach((elementId) => {
      const svgElement = document.getElementById(elementId) as SVGElement | null;
      if (svgElement) {
        svgElement.style.fill = newColor;
      }
    });
  };

  return (
    <div>
      <Box className={styles.root}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={6}>Rotate Floorplan</Grid>
          <Grid xs={6}>Location Floor</Grid>
          <Grid xs={6}>
            <button className={styles.rotateButton} onClick={RotateOnToggle}>
              Toggle
            </button>
          </Grid>
          <Grid xs={6}>
            <select value={selectedColor} onChange={handleColorChange}>
              <option value="#a96845">Copper</option>
              {colorOptions.map((hexColor, index) => (
                <option key={index} value={hexColor}>
                  {hexColorToGeneralName(hexColor)}
                </option>
              ))}
            </select>
          </Grid>
        </Grid>
      </Box>
      <div style={StyleOnRotation}>
        <FloorPlan stroke={selectedColor} fill={selectedColor} />
      </div>
    </div>
  );
};

export default SvgComponent;
