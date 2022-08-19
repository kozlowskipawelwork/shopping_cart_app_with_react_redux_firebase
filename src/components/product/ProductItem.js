import React from 'react'
import { ProductItemStyle, CartAddButton } from '../../styles/ProductScreen'

const ProductItem = ({item}) => {
    return (
        <ProductItemStyle primary>
        <img style={{width:'100px'}} src ={item.image} alt = {item.title}></img>
        <h3 style ={{
            border: '1px solid black',
            borderRadius: '2px',
            padding: '1rem',
        }}> {item.title}</h3>
        <p style = {{
            fontSize:'30px',
            color:'gray'
        }}>PLN {item.price}</p>
        <p>{item.quantityInStock}</p>
        <p style = {{
            fontSize:'10px',
            color:'gray'
        }}>{item.description}</p>

        <CartAddButton 
        //onClick={addToCartHandler} 
        primary>
            Add to Cart
        </CartAddButton>

        </ProductItemStyle>

    )
}


export default ProductItem