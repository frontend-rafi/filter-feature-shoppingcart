import React from 'react'
import './sidebar.css'
import Category from './category/Category'
import Price from './price/Price'
import Colors from './colors/Colors'
function Sidebar({handleRadioChange}) {
  return (
    <>
<section className='sidebar'>
<div className="logo-container">
<h1>🛒</h1>
</div>
<Category handleRadioChange={handleRadioChange}/>
<Price handleRadioChange={handleRadioChange}/>
<Colors handleRadioChange={handleRadioChange}/>
</section>
 </>
  )
}

export default Sidebar