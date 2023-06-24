import React from 'react'
import './Recommended.css'
import Button from '../components/Button'
function Recommended({handleButtonChange}) {
  return (
    <>
       <div >
        <h2  className='recommended-title'>Recommended</h2>
        <div className='recommended-flex'>
<button onClick={handleButtonChange} className='btns' value="">All Products</button>
<Button handleButtonChange={handleButtonChange} value={"Nike"}  title="nike"/>
<Button handleButtonChange={handleButtonChange} value={"Adidas"}  title="adidas"/>
<Button handleButtonChange={handleButtonChange} value={"Puma"}  title="puma"/>
<Button handleButtonChange={handleButtonChange} value={"Vans"}  title="vans"/>
        </div>
        </div> 
    </>
  )
}

export default Recommended