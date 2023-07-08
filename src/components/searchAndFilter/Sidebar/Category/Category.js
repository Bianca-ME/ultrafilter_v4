import React from 'react'

import Input from '../../Input'

export default function Category({handleChange}) {
  return (
    <div>
      <h2 className='sidebar-title'>Category</h2>
      <div>
        <label className='sidebar-label-container'>
          <input onChange={handleChange} type='radio' value="" name="test" />
          <span className="checkmark"></span> Hey   
        </label>
        <Input
        handleChange={handleChange}
        value="categ1"
        title="Categ1"
        name="test"
        />
        <Input
        handleChange={handleChange}
        value="categ2"
        title="Categ2"
        name="test"
        />
        <Input
        handleChange={handleChange}
        value="categ3"
        title="Categ3"
        name="test"
        />
      </div>
    </div>
  )
}
