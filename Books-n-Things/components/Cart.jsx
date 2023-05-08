import React, {useRef} from 'react';
import Link from 'next/Link'; //The Link component provides a method of client-side navigation within Next.js applications
import {AiOutlineMinus, AiOutlinePlus, AiOutlineShopping, AiOutlineLeft} from 'react-icons/ai';
import {TiDeleteOutline} from 'react-icons/ti';
import toast from 'react-hot-toast'; //to add beautiful notifications
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';

const Cart = () => {

  /*
    Pay with Stripe functionality 
    
    Step-1: We are making the request to the backend
  */
  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method : 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if(response.statusCode === 500)
        return; //simply returing the function when something goes wrong
    
    const data = await response.json();

    toast.loading('Redirecting...');

    stripe.redirectToCheckout({sessionId: data.id});
  }//handleCheckout

  //setting up reference for cart
  const cartRef = useRef();

  //fetching data from state context
  const {totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
        type="button"
        className="cart-heading"
        onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>

        {/* Shopping Bag is empty */}
        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        {/* Shopping Bag */}
        <div className="product-container">
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className="product" key={item._id}>
              <img src={urlFor(item?.image[0])} className="cart-product-image" />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4>₹{item.price}</h4>
                </div>
                <div className="flex bottom">
                  <div>
                  <p className="quantity-desc">
                    <span className="minus" onClick={() => toggleCartItemQuanitity(item._id, 'dec') }>
                    <AiOutlineMinus />
                    </span>
                    <span className="num">{item.quantity}</span>
                    <span className="plus" onClick={() => toggleCartItemQuanitity(item._id, 'inc') }><AiOutlinePlus /></span>
                  </p>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Items */}
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <br/>
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>₹{totalPrice}</h3>
            </div>

            {/* Checkout */}
            <div className="btn-container">
              <button type="button" className="btn" onClick={handleCheckout}>
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart