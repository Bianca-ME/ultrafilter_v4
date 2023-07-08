import React, {useState} from 'react';

import Navigation from '../../../components/searchAndFilter/Navigation/Navigation';
import Products from '../../../components/searchAndFilter/Products/Products';
import Sidebar from '../../../components/searchAndFilter/Sidebar/Sidebar';
import Card from '../../../components/searchAndFilter/Card';
// import { useState } from 'react';

// Database
import products from '../../../data/database_products';

export default function CompresoareGD() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({category,title,subtitle}) => 
        category === selected || 
        title === selected || 
        subtitle === selected
        );
      // category, color, price
    }


    

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

  const result = filteredData(products, selectedCategory, query)

  return (
    <div>
      <h1 className='huge-title-2'>compresoare</h1>
      <Sidebar handleChange={handleChange}/>
      <Navigation query={query} handleInputChange={handleInputChange}/>
      <Products result={result}/>
      {/* <Recommended handleClick={handleClick}/> */}
    </div>
  );
}

