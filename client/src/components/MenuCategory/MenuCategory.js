import React from 'react'
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

export default function MenuCategory() {

  const { data } = useQuery(QUERY_CATEGORY);
  let menuCategory;

  if (data) {
    menuCategory = data.menuCategory;
  }

  return (
    <div>
      {menuCategory ? (

        <p>
            {menuCategory.name}
        </p>

        // Menu item

      ): null}
    </div>
  );
}
