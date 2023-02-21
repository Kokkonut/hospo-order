import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS } from '../../utils/queries';

const MenuCategory = () => {
  const { loading, error, data } = useQuery(QUERY_ALL_PRODUCTS);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (data) {
      const productsByCategory = data.products.reduce((accumulator, product) => {
        const { category } = product;
        if (!accumulator[category._id]) {
          accumulator[category._id] = { ...category, products: [] };
        }
        accumulator[category._id].products.push(product);
        return accumulator;
      }, {});
      setCategories(Object.values(productsByCategory));
    }
  }, [data]);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error loading products.</p>;
  }

  return (
    <div>
      {categories.map(category => (
        <div key={category._id}>
          <h2>{category.name}</h2>
          {category.products.map(product => (
            <div key={product._id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price.toFixed(2)}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MenuCategory;




// import React from 'react';
// import { useQuery } from '@apollo/client';
// import { QUERY_ALL_PRODUCTS } from '../../utils/queries';

// function MenuCategory({ category }) {

// const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
// console.log('1st', data);

// if (loading || !data) {
//     return <p>Loading...</p>;
// }

// const { products } = data;

// if (products.length === 0) {
//     return <p>No products found.</p>;
// }

//   return (
//     <div>
//       <h2>{category.name}</h2>
//       {/* <ul>
//         {category.products.map((product) => (
//           <li key={product._id}>
//             {product.name} - {product.price}
//           </li>
//         ))}
//       </ul> */}
//     </div>
//   );
// }

// export default MenuCategory;




// import React, { useEffect } from 'react'

// import MenuItem from '../MenuItem/MenuItem';

// import { useQuery } from '@apollo/client';
// import { QUERY_VENUE } from '../utils/queries';

// import {  } from '../utils/queries';

// export default function MenuCategory() {

//   const { data } = useQuery(QUERY_VENUE);
//   let menuCategory;

//   if (data) {
//     menuCategory = data.menuCategory;
//   }

//   function filterItems() {
//     if (!menuCategory) {
//       return state.menuItems;
//     }
//   }

//   return (
//     <div>
//       {menuCategory ? (

//         <p>{menuCategory.name}</p>

//         {filterItems().map((item) => {
//           <MenuItem 
//             key={item._id}
//             _id={item._id}
//             name={item.name}
//             price={item.price}
//           />
//         })}

//       ): null}
//     </div>
//   );
// }
