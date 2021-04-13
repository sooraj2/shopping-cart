import React from 'react'
import { Item } from "semantic-ui-react";
function Product({ name, price }) {
    return (
        <Item>
        <Item.Content verticalAlign="middle">Name:{name} , Price:{price}</Item.Content>
      </Item>
    )
}

export default Product
