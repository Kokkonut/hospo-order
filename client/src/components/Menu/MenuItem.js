import { useShoppingCart } from "../../context/ShoppingCartContext"
import { formatCurrency } from "../../utils/formatCurrency"
import '../../assets/App.css'
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";


export function MenuItem({ product, id, name, price }) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart
  } = useShoppingCart()
  //got to check this
  const quantity = getItemQuantity(id)
  // const quantity = getItemQuantity()



    return (
      <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
        
        {quantity === 0 ? (<button className="buttonStyleAdd" onClick={() => increaseCartQuantity(id)}>Add to cart</button> ) : (
        <div>
          <div>
            <button onClick={() => increaseCartQuantity(id)}><PlusCircleOutlined /></button>
              {quantity} in cart
            <button className="buttonStyle" onClick={() => decreaseCartQuantity(id)}><MinusCircleOutlined /></button>
          </div>

          <button className="buttonStyleRemove" onClick={() => removeFromCart(id)}>Remove from cart</button>
        </div>
        )}

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
