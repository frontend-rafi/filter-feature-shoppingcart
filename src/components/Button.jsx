import React from 'react'

function Button({handleButtonChange,value,title}) {
  return (
    <button 
    className='btns'
    onClick={handleButtonChange} value={value}>
{title}
    </button>
  )
}

export default Button