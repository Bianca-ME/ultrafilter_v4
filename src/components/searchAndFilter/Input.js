import React from 'react'

export default function Input({handleChange, value, title, subtitle, name }) {
  return (
    <label className='sidebar-label-container'>
      <input onChange={handleChange} type='radio' value={value} name={name} />
      <span className='checkmark'></span>
      {title}
    </label>
  )
}
