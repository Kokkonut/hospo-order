const MenuItem = ({ product }) => {
    return (
      <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
        <p>Quantity: {product.quantity}</p>
      </div>
    );
  };
  
  export default MenuItem;






// import React from 'react'

// //Ignore this file for now

// export default function MenuItem() {
//   return (
//     <div>
//         {venue.menus.menuCategory.menuItems.map((item) => {
//           <div key={item._id}>

//             {item.name}
//             {item.description}
//             {item.price}

//             {item.modifier_group.map((modifierGroup) => {

//               {modifierGroup.name}
              
//               {modifierGroup.modifiers.map((_id, name, price) => {

//                 {name}
//                 {price}
//               })}
//             })}
//           </div>
//         })}
//     </div>
//   )
// }
