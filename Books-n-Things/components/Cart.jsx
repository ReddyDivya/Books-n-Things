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
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>

        {/*Empty cart*/}
        {cartItems.length < 1 && ( 
          <div className="empty-cart">
              <AiOutlineShopping size={150}/>
              <h3>Your shopping bag is empty</h3>

              <Link href="/">
                <button type="button" 
                  onClick={() => setShowCart(false)}
                  className='btn'
                >
                    Continue Shopping
                </button>
              </Link>
          </div>  
        )}

        {/*Cart Items*/}
        <div className="product-container">
          {
            cartItems.length >= 1 && cartItems.map((item) => {
              <div className="product" key={item._id}>
                <img src={urlFor(item?.image[0])} className="cart-product-image"/>
                <div className="item-desc">
                    <div className="flex top">
                        <h5>{item.name}</h5>
                        <h4>{item.price}</h4>
                    </div>
                </div> 
              </div> 
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Cart