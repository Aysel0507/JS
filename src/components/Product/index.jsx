import React, { useState,useEffect } from 'react'
import ProductItem from '../ProductItem'
import ProductList from '../ProductList'
import AddProduct from "../AddProduct"
// import DeleteProduct from "../DeleteProduct"
import SearchProduct from "../SearchProduct"

const Product = () => {
    const [products, setProducts] = useState([])
    const [searchQuery, setSearchQuery] = useState("")

   

    let filteredProducts = products.filter((product) => {
        return product.name.trim().toLowerCase().includes(searchQuery.trim().toLowerCase())
    })
    return (
        <div>
            <AddProduct products={products} setProducts={setProducts}/>
            {/* <DeleteProduct /> */}
            <SearchProduct setSearchQuery={setSearchQuery}/>
            <ProductList>
              {filteredProducts && filteredProducts.map((prod)=>{
                return <ProductItem key={prod.id} product={prod} setProducts={setProducts} />
              })}
            </ProductList>
        </div>
    )
}

export default Product