import React from 'react'
import {products} from '../../constants/products'

const ProductScreen = () => {
    return (
        <div>
            <h1>Products</h1>
            {products.map((item) => (
                <ProductItem item={item} />
              ))}
        </div>



    )


}



export default ProductScreen