import React, { useEffect, useState } from 'react';
import './App.css';
import { Product } from './features/products/Product';
import { Cart } from './features/cart/Cart';
import { fetchAsync } from './features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() { 
    const [cart,setCart] = useState(false);
    const items = useSelector(state=> state.cart.items)
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(fetchAsync())
     },[])
  


  return (
    <div className="App">
      <button style={{margin:"5rem", padding:'1rem' , fontSize:'3rem' , fontWeight:"bold"}} onClick={()=>setCart(!cart)}>Cart [{items.length}]</button>

     {
      cart?<Cart/>:<Product/>
     }
     
    </div>
  );
}

export default App;
