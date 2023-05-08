/*
  This file is insid the pages directory. 
  When a file is added to the pages directory, it's automatically available as a route.
  Eg: If we create pages/success.js that exports a React component like below, it will be accessible at /success.
*/
import React, { useState, useEffect } from 'react';
import Link from 'next/Link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  //this gets executes as soon as successful page loads
  useEffect(() => {
    localStorage.clear(); //resetting local storage
    setCartItems([]); //resetting cart items
    setTotalPrice(0); //resetting total price
    setTotalQuantities(0);//resetting quantities
    runFireworks();//show confetti
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:booksnthings@gmail.com">
          booksnthings@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success