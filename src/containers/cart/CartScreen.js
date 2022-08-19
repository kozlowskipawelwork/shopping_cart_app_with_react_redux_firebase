import React from 'react'
import CartItem from '../../components/cart/CartItem'


const cartItems= [{
  title:'Amazing Shirt',
  price:1999,
  image: 
  'https://unsplash.com/photos/EirX0QN4-Sk',
  qtyInCart:1,


  
}]


const CartScreen = () => {
    return(
        <div>
            {cartItems.map((item)=>(
          <CartItem item={item} />
        ))}
        </div>
    )
}

export default CartScreen