import React from 'react'

import Input from '../../Input'

export default function Category({handleChange}) {
  return (
    <div>
      <h2 className='sidebar-title'>categorii</h2>
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
        <Input
        handleChange={handleChange}
        value="cu piston"
        title="Cu piston"
        name="test"
        />
        <Input
        handleChange={handleChange}
        value="cu excentric si paleti Vane Compressors"
        title="Cu excentric si paleti Vane Compressors"
        name="test"
        />
        <Input
        handleChange={handleChange}
        value="pentru scafandrii"
        title="Pentru scafandrii"
        name="test"
        />
      </div>
    </div>
  )
}
