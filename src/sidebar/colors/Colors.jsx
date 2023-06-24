import React from 'react'
import './colors.css'
import Input from '../../components/Input'
function Colors({handleRadioChange}) {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">colors</h2>
      <label className='sidebar-label-container'>

<input  type='radio' 
onChange={handleRadioChange}
value='' name=""  />
<span className='checkmark all'></span>All
</label>


     <Input
     handleRadioChange={handleRadioChange}
     value={'black'}
     title={"Black"}
     name={"test1"}
     color={"black"}
     
     
     />
      <Input
     handleRadioChange={handleRadioChange}
     value={'blue'}
     title={"Blue"}
     name={"test1"}
     color={"blue"}
     
     
     />
      <Input
     handleRadioChange={handleRadioChange}
     value={'red'}
     title={"Red"}
     name={"test1"}
     color={"red"}
     
     
     />
      <Input
     handleRadioChange={handleRadioChange}
     value={'green'}
     title={"Green"}
     name={"test1"}
     color={"green"}
     
    
     
     />


<label className='sidebar-label-container'>

<input  type='radio' 
onChange={handleRadioChange}
value='white' name="test"  />
<span className='checkmark'></span>White
</label>
    </div>
  )
}

export default Colors