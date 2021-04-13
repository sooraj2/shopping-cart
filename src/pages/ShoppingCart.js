import React,{useContext} from 'react'
import { Icon,Table,Container,Button } from 'semantic-ui-react'
import {useEffect,useState} from 'react';
import {CartContext} from '../Context'; 
import 'semantic-ui-css/semantic.min.css'
import Products from './Products';

function CartList() {

    const {state, dispatch } = useContext(CartContext);
    const [total, setTotal] = useState(0);
   
    useEffect(()=>{

      state.map((product)=> setTotal(x => x+product.price));
      return () =>{
       
      }
         

    },[]);
    
    const handleChange= value => () => 
    {
         setTotal(x => x-value.price)
         dispatch({type:'remove', value});
    
    }

    
    return (
        <>
        <Container>
    <Table >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan='3' textAlign='center' style={{'fontSize':'24px'}}>Shopping Cart</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>

        {state.map((product)=>(
            <Table.Row>
            <Table.Cell width={14}>{product.product}</Table.Cell>
            <Table.Cell>Rs.{product.price}</Table.Cell>
            <Table.Cell> 
            <Button style={{'background':'white'}} onClick={handleChange(product)} >
                <Button.Content visible>
                <Icon color='red' name='remove circle' size='large' />
                </Button.Content>
             </Button>                   
                </Table.Cell>
          </Table.Row>
        ))}
      
      
    </Table.Body>
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell textAlign='center' style={{'fontSize':'20px', 'fontWeight':'bold' }}>
          Total
        </Table.HeaderCell>
        <Table.HeaderCell colSpan='2' style={{'fontSize':'20px', 'fontWeight':'bold', }}>
          {total}
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>


    
  </Table>
  </Container>
     </>   
    )
}

export default CartList;
