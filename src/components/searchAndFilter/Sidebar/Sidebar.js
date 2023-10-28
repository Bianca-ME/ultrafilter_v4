import React from 'react'

import Category from './Category/Category';

export default function Sidebar({handleChange}) {
  return (
    <div>
        <section className='sidebar'>
            <Category handleChange={handleChange}/>
        </section>
    </div>
  )
}
