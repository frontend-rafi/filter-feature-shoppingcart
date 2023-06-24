import React from 'react'
import './category.css'
import Input from '../../components/Input';
function Category({handleRadioChange}) {
  console.log(handleRadioChange);
  return (
    <>
<div >
    <h2 className="sidebar-title">Category</h2>


    <div >
    <label className='sidebar-label-container'>

<input  type='radio' 
onChange={handleRadioChange}
value='' name=""  />
<span className='checkmark'></span>All
</label>

<Input  
handleRadioChange={handleRadioChange}
title="Sneakers"
value='sneakers'
name="test"
/>
<Input  
handleRadioChange={handleRadioChange}
title="Flats"
value='flats'
name="test"
/>
<Input  
handleRadioChange={handleRadioChange}
title="Sandals"
value='sandals'
name="test"
/>
<Input  
handleRadioChange={handleRadioChange}
title="Heels"
value='heels'
name="test"
/>
    </div>
</div>


    </>
  )
}

export default Category