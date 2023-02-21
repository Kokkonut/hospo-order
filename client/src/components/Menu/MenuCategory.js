import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS } from '../../utils/queries';

const MenuCategory = () => {
  // Fetch all products from the GraphQL API
  const { loading, error, data } = useQuery(QUERY_ALL_PRODUCTS);

  // Declare state to store categories and initialize it as an empty array
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // If the data has been fetched, update the categories state
    if (data) {
      // Group the products by category
      const productsByCategory = data.products.reduce((accumulator, product) => {
        const { category } = product;
        if (!accumulator[category._id]) {
          accumulator[category._id] = { ...category, products: [] };
        }
        accumulator[category._id].products.push(product);
        return accumulator;
      }, {});

      // Convert the object of categories to an array and update the state
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
      {/* Map over each category and its products */}
      {categories.map(category => (
        <div key={category._id}>
          {/* Display the category name */}
          <h2>{category.name}</h2>
          {/* Map over each product in the category and display its details */}
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
