import React from 'react'
import { Icon,Table,Container,Button } from 'semantic-ui-react'
import {useContext} from 'react';
import 'semantic-ui-css/semantic.min.css';
import {CartContext} from '../Context'; 
function Products({products}) {

    const {dispatch } = useContext(CartContext);

    const handleChange= value => () => 
    {
         dispatch({type:'add', value});
    }
        
        

    return (
        <>
        <Container>
    <Table >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan='3' textAlign='center' style={{'fontSize':'24px'}}>Products</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>

        {products.map((product)=>(
            <Table.Row>
            <Table.Cell width={14}>{product.product}</Table.Cell>
            <Table.Cell>Rs.{product.price}</Table.Cell>
            <Table.Cell> 
            <Button style={{'background':'white'}} onClick={handleChange(product)} >
                <Button.Content visible>
                <Icon color='blue' name='cart' size='large' />
                </Button.Content>
             </Button>    
            </Table.Cell>
          </Table.Row>
        ))}   
    </Table.Body>
  </Table>
  </Container>
     </>   
    )
}

export default Products
