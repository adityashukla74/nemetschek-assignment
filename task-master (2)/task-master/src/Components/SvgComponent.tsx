import React, { useEffect, useState } from 'react';
import {ReactComponent as FloorPlan} from '../assets/floor_plan.svg';
import {hexColorToGeneralName, getRandomHexColor} from '../utils/colors';

const SvgComponent:React.FC = () => {
  const [ isRotated, setIsRotated ]= useState<boolean>(false);
  const [colorOptions, setColorOptions] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>('');

  const StyleOnRotation = {
    transform: isRotated ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 1s ease' 
  };

  const RotateOnToggle = () => {
    setIsRotated((prevIsRotated: boolean) => !prevIsRotated);
  }

  useEffect(() => {
    const generateColors = Array.from({length : 10}, () => getRandomHexColor());
    setColorOptions(generateColors);
  }, []);

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div>
      <button onClick={RotateOnToggle}>Rotate On Toggle</button>
      
      <select value = {selectedColor} onChange={handleColorChange}>
        <option value= ''>Select HexColor... </option>
        {colorOptions.map((hexColor, index) => (
          <option key={index} value= {hexColor}>
            {hexColorToGeneralName(hexColor)}
          </option>
        ))}
      </select>
      
      <div style={StyleOnRotation}>
       <FloorPlan stroke={selectedColor} fill={selectedColor}/>
      se</div>
    </div>
  )
}

export default SvgComponent;
