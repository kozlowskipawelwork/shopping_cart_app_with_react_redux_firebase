import React from 'react'
import { CartContainerStyle, PageHeading } from '../../styles/CartScreen'
import CartItem from '../../components/cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { listCartItems } from '../../actions/cartActions'

/*
const cartItems= [{
  title:'Amazing Shirt',
  price:1999,
  image: 
  'https://unsplash.com/photos/EirX0QN4-Sk',
  qtyInCart:1,

}]*/



const CartScreen = () => {
    
    const dispatch = useDispatch()

    const cartItemsList = useSelector((state) => state.cartItemsList)

    const {loading, error, cartItems} = cartItemsList

    React.useEffect(()=>{
        dispatch(listCartItems())}, [dispatch])


    return(
        <div>
      {loading ?(
        <div>loading...</div>
      ): error ?(
        <div>loading...</div>
      ):(
        <>
        <PageHeading>cart</PageHeading>
        <CartContainerStyle>
        {cartItems.map((item)=>(
          <CartItem item={item} />
        ))}
  
        </CartContainerStyle>
        </>
      )}
       
        
    </div>
    )
}

export default CartScreen