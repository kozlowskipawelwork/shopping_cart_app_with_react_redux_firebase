import React from 'react'
import { CartContainerStyle, PageHeading } from '../../styles/CartScreen'
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
        <>
        <PageHeading>cart</PageHeading>
        <CartContainerStyle>
        {cartItems.map((item)=>(
          <CartItem item={item} />
        ))}
  
        </CartContainerStyle>
        </>
        </div>
    )
}

export default CartScreen