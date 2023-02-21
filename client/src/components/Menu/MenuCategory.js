import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS } from '../../utils/queries';
// import MenuItem from './MenuItem';
// import { CaretDownOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

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

  console.log('3rd', data);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error loading products.</p>;
  }

  return (
    <div>
    <Menu
      mode="inline"
      style={{ width: 412 }}
      
    >     
      {Object.values(categories).map((category) => (
        <Menu.SubMenu key={category._id} 
        // icon={<CaretDownOutlined />} 
        title={category.name}>
          {category.products.map((product) => (
            <Menu.Item key={product._id}>
              {product.name} 
              {product.description}
              {product.price}
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
    </div>
  );
};

export default MenuCategory;