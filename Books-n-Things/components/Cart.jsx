import React, {useRef} from 'react';
import Link from 'next/Link';
import {AiOutlineMinus, AiOutlinePlus, AiOutlineShopping, AiOutlineLeft} from 'react-icons/ai';
import {TiDeleteOutline} from 'react-icons/ti';
import toast from 'react-hot-toast';
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';

const Cart = () => {
  //setting up reference for cart
  const cartRef = useRef();

  //fetching data from state context
  const {totalPrice, totalQuantities, cartItems, setShowCart} = useStateContext();

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button type="button" 
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft/>
        </button>
      </div>
    </div>
  )
}

export default Cart