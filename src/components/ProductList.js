import React from 'react'

import {Item } from "semantic-ui-react";
import Product from "./Product";

function ProductList({products}) {
    return (
        <Item.Group divided>
        {products.map((product) => (
          <Product name={product.product} price={product.price}/>
        ))}
      </Item.Group>
    )
}

export default ProductList
