import React from 'react';
import Link from 'next/Link';
import {AiOutlineShopping} from 'react-icons/ai';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {

  const {setCartItems, totalQuantities, setShowCart}  = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Books-n-Things</Link>
      </p>
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping/>
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
    </div>
  )
}

export default Navbar