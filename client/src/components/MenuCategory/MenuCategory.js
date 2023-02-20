import React from 'react'

// import MenuItem from '../MenuItem/MenuItem';

import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';

export default function MenuCategory() {

  const { data } = useQuery(QUERY_CATEGORIES);
  const category = data?.categories || {};

  console.log(category);

  return (
    <div>

      {/* {category.map((item) => (
        <div>
            {item.name}
        </div>
      ))} */}
      
    </div>
  );
}
