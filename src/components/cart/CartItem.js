import React from 'react'
import { CartItemStyle, CartDeleteButtonStyle, CartInfoStyle  } from '../../styles/CartScreen'
import { updateCartQty } from '../../actions/cartActions'
import { useDispatch } from 'react-redux'


export const CartItem = ({item}) => {
    const [qty, setQty] = React.useState(Number(item.quantityInCart))
    const dispatch = useDispatch()
    const handleCartQty = (itemId, qty) => {
        dispatch(updateCartQty(itemId, qty))
      } 
    
    return (
        <CartItemStyle>
            <img src={item.image} 
            alt={item.name} 
            style={{maxWidth:'150px', maxHeight: '150px'}}/>
        <CartInfoStyle>
            <h3>Title</h3>
            <h4>{item.title}</h4>
        </CartInfoStyle>
        <CartInfoStyle>
            <h3>Price</h3>
            <h4>
                {' '}<span style={{fonrWeight:600, marginRight:'2px'}}>R</span> 
                {item.price}</h4>
        </CartInfoStyle>
        <CartInfoStyle>
            <h3>
                Quantity in cart
            </h3>
            <input 
            type='number' 
            min='1' 
            value={qty} onChange={(e)=>{
                setQty(e.target.value)
                handleCartQty(item)
            }}/>
            
        </CartInfoStyle>
            <CartDeleteButtonStyle 
            //onClick= {() => handleCartDelete(item.id)}
            >
                
                Delete
            </CartDeleteButtonStyle>
        </CartItemStyle>
      )

}

export default CartItem