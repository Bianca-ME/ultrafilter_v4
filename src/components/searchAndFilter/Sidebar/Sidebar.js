import React from 'react'

import Category from './Category/Category';
// import Price;

export default function Sidebar({handleChange}) {
  return (
    <div>
        <section className='sidebar'>
            {/* <div className='logo-containerr'><h1></h1></div> */}
            <Category handleChange={handleChange}/>

        </section>
    </div>
  )
}
