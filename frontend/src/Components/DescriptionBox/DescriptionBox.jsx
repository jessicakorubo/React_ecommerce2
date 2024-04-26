import React from 'react'
import './Descriptionbox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)  </div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, ex.
                 Ipsam dolores voluptatibus, doloremque expedita nihil blanditiis,
                  in tempora ad facere quis 
                reprehenderit possimus minima, quasi dolorem praesentium delectus? Ullam.</p>
        </div>
    </div>
  )
}

export default DescriptionBox