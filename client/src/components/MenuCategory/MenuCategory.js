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
