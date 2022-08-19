import React from 'react'
import {products} from '../../constants/products'
import ProductItem from '../../components/product/ProductItem'
import { PageHeading, ProductContainerStyle } from '../../styles/ProductScreen'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../actions/productActions'


const ProductScreen = () => {
    const dispatch = useDispatch()

    const productsList = useSelector((state) => state.productsList)
  
    const { loading, error, products } = productsList

    React.useEffect(() => {
        dispatch(listProducts())
      }, [dispatch])

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