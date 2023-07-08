import React from 'react'

export default function Card({ title, subtitle, info, table }) {
  return (
    <section className='card'>
      {/* img */}
      {/* <img src={img} alt={title} className='card-img'/> */}
      <div className='card-details'>
        <h3 className='card-title'>{title}</h3>
        {/* section card-reviw */}
        {/* section card-price - div - del/> */}
        <p className='subtitle-in-card-product'>{subtitle}</p>
        <div className='flex read-more-and-table'>
          <p>{info}</p>
          <p>{table}</p>
        </div>

      </div>
    </section>
  )
}
