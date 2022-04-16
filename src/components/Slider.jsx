import React, { useState } from 'react'

const Slider = (props) => {
    const className = [props.className];
    const [rangeValue, setRangeValue] = useState(50);
    const inputRangeStyle = {
        background: `linear-gradient(to right, #a5f3eb 0%, #a5f3eb ${rangeValue}%, #eaeefb ${rangeValue}%, #eaeefb 100%)`,
    }

    const handleChange = (e) => {
        props.onChange(e.target.value) 
        setRangeValue(e.target.value)
    }

  return (
    <input 
        type="range" 
        className={`w-full h-2  cursor-pointer outline-none appearance-none rounded-full ${className.join(" ")}`} 
        style={inputRangeStyle}
        onChange={handleChange}
    />
  )
}

export default Slider