import React from 'react'

function Input({handleRadioChange,value,name,color,title}) {
  return (
    <label className='sidebar-label-container'>

    <input  type='radio' 
  onChange={handleRadioChange}
  value={value} name={name}/>
  <span style={{backgroundColor:color}} className='checkmark'></span>{title}
</label>
  )
}

export default Input