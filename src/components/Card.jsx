import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import {BsFillBagHeartFill} from 'react-icons/bs'
function Card({key,img,title,star,reviews,prevPrice,newPrice}) {
  return (
    <div>
     <section key={key} className='card'>
<img
className='card-img'
src={img} alt={title} />
<div className="card-details">
<h3 className='card-title'>{title}</h3>
<section className="card-reviews">
{star}
<span className='total-reviews'>{reviews}</span>
</section>
<section className='card-price'>
<div className="price">
<del>${prevPrice}</del>
<span>${newPrice}</span>
</div>

<div className=' bag-icon'>

<BsFillBagHeartFill/>

</div>

</section>
</div>
      </section>    
    </div>
  )
}

export default Card