import React from 'react'
import {products} from '../../constants/products'
import ProductItem from '../../components/product/ProductItem'
import { PageHeading, ProductContainerStyle } from '../../styles/ProductScreen'

const ProductScreen = () => {
    return (
        <div>
            <PageHeading primary>Products</PageHeading>
            <ProductContainerStyle primary>
            {products.map((item) => (
                <ProductItem item={item} />
              ))}
            </ProductContainerStyle>
        </div>



    )


}



export default ProductScreen