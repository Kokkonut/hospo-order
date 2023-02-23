import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS } from '../../utils/queries';
import MenuItem from './MenuItem';
import { CaretDownOutlined } from '@ant-design/icons';
import { Menu, Button, Popover } from 'antd';

const headerStyle = {
  textAlign: 'center',
  color: 'white',
  height: 64,
  paddingInline: 20,
  lineHeight: 'px',
};

const MenuCategory = () => {
  const { loading, error, data } = useQuery(QUERY_ALL_PRODUCTS);
  const [categories, setCategories] = useState([]);
  const [dropdown, setDropdown] = useState(false);
  // useEffect(() =>{

  // }, [dropdown]
  // )

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

  function toggleDropdown() {
    setDropdown(!dropdown);
  }


  return ( 
    

    <div style={{ display: "flex "}} className='menuContainer'>
     
      
     <Menu
     
        mode="inline"
        

      >
        {Object.values(categories).map((category) => (
          <Menu.SubMenu  
          // className='mcName' 
          // style={headerStyle}
          key={category._id}
          title={category.name}
          ><div>
            {category.products.map((product) => (
              <Menu.Item style={{ height: '100%', minHeight: 0, flex: "auto" }}
              MenuItem
              key={product._id}><MenuItem key={product._id} product={product} />


              </Menu.Item>
            ))}</div>
          </Menu.SubMenu>
        ))}
      </Menu>
     
    </div>
  );
};

export default MenuCategory;

     
      

//     <h2 className='mch2 
//   ' style={headerStyle} >{category.name}</h2>
  //  <Button className='mcButton' icon={<CaretDownOutlined />} onClick={toggleDropdown}></Button> 
  // {dropdown && <div className='mcItems'>
  //    {category.products.map(product => (
  //     <MenuItem key={product._id} product={product} />
  //   ))} 
// </div>}

//   </div>
// ))}

