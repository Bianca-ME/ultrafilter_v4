import React from 'react'

import Input from '../../Input'

export default function Category({handleChange}) {
  return (
    <div>
      <h2 className='sidebar-title'>Category</h2>
      <div>
        <label className='sidebar-label-container'>
          <input onChange={handleChange} type='radio' value="" name="test" />
          <span className="checkmark"></span> Toate   
        </label>
        {/* <Input
        handleChange={handleChange}
        value="compresoare cu suruburi"
        title="Compresoare cu suruburi"
        name="test"
        /> */}
        <Input
        handleChange={handleChange}
        value="injectie de ulei"
        title="Injectie de ulei"
        name="test"
        />
        <Input
        handleChange={handleChange}
        value="oil free"
        title="Oil free"
        name="test"
        />
      </div>
    </div>
  )
}
