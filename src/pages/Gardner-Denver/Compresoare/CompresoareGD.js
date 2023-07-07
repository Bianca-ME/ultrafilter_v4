import React, {useState} from 'react';

import Navigation from '../../../components/searchAndFilter/Navigation/Navigation';
import Products from '../../../components/searchAndFilter/Products/Products';
import Sidebar from '../../../components/searchAndFilter/Sidebar/Sidebar';
// import { useState } from 'react';

// Database
import CompresoareGDdata from '../../../data/database_products';

export default function CompresoareGD() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ---------Input Filter --- search bar
  const [query,setQuery] = useState("");

  const handleInputChange = event => {
    setQuery(event.target.value)
  }

  const filteredItems = CompresoareGDdata.filter(product => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()!== -1) 
  );

  // ---------Radio Filter --- checkboxes
  const handleChange = event => {
    setSelectedCategory(event.target.value)
  }

  // ---------Buttons Filter --- the buttons from Recommended
  const handleClick = event => {
    setSelectedCategory(event.target.value)
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems
    }

    // Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({category,title,subtitle}) => 
        category === selected || 
        title === selected || 
        subtitle === selected
        );
      // category, color, price
    }


    const result = filteredData(CompresoareGDdata, selectedCategory, query)

    return filteredProducts.map(({title,subtitle,info,table}) => (
      <Card 
      key={Math.random()} 
      title={title}
      subtitle={subtitle}
      info={info}
      table={table}
      />
    ))

  }


  return (
    <div>
      <h1 className='huge-title-2'>compresoare</h1>
      <Sidebar handleChange={handleChange}/>
      <Navigation />
      <Products />
      {/* <Recommended /> */}
    </div>
  );
}

// ramas la min 1.22.00
// https://www.youtube.com/watch?v=lfm_Hu0hEms&ab_channel=HuXnWebDev