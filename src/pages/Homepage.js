import React from "react";
import {useEffect,useState, useReducer} from 'react';
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Container, Icon, Label, Menu } from "semantic-ui-react";
import Prod from './Products';
import Cart from './ShoppingCart';
import {CartContext} from '../Context'; 

function Homepage() {
  
  const [products,SetProducts]=useState([]);
  const [count,setCount]=useState(0);


  function reducer(state, action) {

    switch (action.type) {
      case "add":{
          setCount(count+1);
          return [...state, action.value];
        }
       case "remove":
         {
          setCount(count-1)
           return state.filter((product)=>product.id!==action.value.id);
          }
      default:
        throw new Error("invalid action");
    }
 }

 const [state, dispatch] = useReducer(reducer, []);

    useEffect(() => {
      fetch('MOCK_DATA.json')
        .then((res) => res.json())
        .then((p) => {    
          SetProducts(p);
        });           
  }, []);

  
 
  //useEffect(() => state.map((product)=> setCount(count+1)),[state]);
  
  return (
      <CartContext.Provider value={{state, dispatch }} >
    <div>
      <BrowserRouter>
        <Container fluid>
          <Menu>
            <Container fluid>
              <Menu.Item header>
                <Link to="/products">Products</Link>
              </Menu.Item>
              <Menu.Item header>
                <Link to="/cart">Shopping Cart</Link>
              </Menu.Item>
            </Container>
            <Menu.Item>
              <Icon name="cart" size='large'/>
              <Label color='blue'>{count}</Label>
            </Menu.Item>
          </Menu>
          <Container text>
            <Switch>
              <Route exact path="/">
              <Prod products={products}/>
                
              </Route>
              <Route path="/products">
                <Prod products={products}/>
              </Route>
              <Route path="/cart"> 
              <Cart/>
              </Route>
            </Switch>
          </Container>
        </Container>
      </BrowserRouter>
      
    </div>
    </CartContext.Provider>
  );
}

export default Homepage;