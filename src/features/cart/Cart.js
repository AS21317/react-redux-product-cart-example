import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import styles  from   './Cart.css';
import { deleteItem } from './cartAPI';
import { deleteAsync,updateAsync } from './cartSlice';



export function Cart() {
   const dispatch =  useDispatch()
   const items = useSelector(state=> state.cart.items)

   
   const handleChange= (e,id)=>
{
  console.log(e.target.value)
  console.log({id,change:{quantity:+e.target.value}})
  dispatch(updateAsync({id,change:{quantity:+e.target.value}}))     // thunk se update krte time sara change as a single object pass krna hota hai, + put krne se value as an integer pass hoti  hai othewise db me quantity as a string pass ho jayegi  
}


  return (
    <div>

      

          <h2 style={{margin:'2rem'}}> Cart Items are Displayed Here !!</h2>
                    {/* method to claculate total amount of cart item  */}
        <h1>Total amount:${items.reduce((accumulator,itemIterator)=>itemIterator.price * itemIterator.quantity + accumulator,0)}</h1>
     

        {items.map(item=>(
           <div className="card" >
      
           <img className='img-fluid' src={item.thumbnail} alt={item.title} style={{width:"100%"}}/>
           <div className='description' style={{display:'flex', flexDirection:'column', }}>
            <p>{item.title}</p>
           
            <span>{item.brand}</span>
            <br />
            <strong>${item.price}</strong>

           </div>
          <div className='quantity' style={{margin:'1rem'}}>
            Quantity
            <select  value={item.quantity} onChange={(e)=>handleChange(e,item.id)} id="">
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
            </select>
          </div>
          <div className='close'>
            <button onClick={()=> dispatch(deleteAsync(item.id))}>Delete Item </button>
          </div>
          
           </div>
          
        ))}
                 
      


       
    </div>
  );
}
