import React from 'react'

export default function MenuItem() {
  return (
    <div>
        <Link to ="/cart">
            <img src={`$item.img`}/>
            {item.name}
            {item.price}
        </Link>
    </div>
  )
}
