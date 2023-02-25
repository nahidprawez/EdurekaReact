import { Select } from 'antd';
import React, {useState} from 'react';


function SelectColor() {
    const [color, setColor] = useState("red");


    const favColor = ["Red", "Blue", "Green", "Orange"];

    const handleChangeColor = (index) => {
       setColor(favColor[index])
    }
  return (
    <>
      <div style={{backgroundColor : color, margin : "10px 0px"}} >Select your favourite Color</div>
      <Select value={color} onChange={handleChangeColor}>
         {favColor.map((color , index)=> {
            return(
                <Select.Option key={index}>{color}</Select.Option>
            )
         })}
      </Select>
    </>
  )
}

export default SelectColor