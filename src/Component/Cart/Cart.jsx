import React from 'react'
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total=0;
    for(const product of cart){
      total = Math.round( total + 500 * 0.456);
    }
      let order = 0;
      
     for(const product of cart){
    order = order +1;
    }
   
  return (
    <div>
        <div> 
            <h3>Person Added :{order}</h3>
            
                    <h3>Total Cost:${ total * order }M</h3>
                    {/* <img src={props.img} alt="..." /> */}
                    <button ><a href="https://superhuman.com/">Buy Now</a></button>
                    
        </div>
    </div>
  )
}

export default Cart