import React from 'react';
import Link from 'next/Link';//The Link component provides a method of client-side navigation within Next.js applications
import {Cart} from './';
import {AiOutlineShopping} from 'react-icons/ai';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {

  const {showCart, totalQuantities, setShowCart}  = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Books-n-Things</Link>
      </p>
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping/>
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {/*Display the cart only when we click on the cart icon*/}
      {showCart && <Cart/>}
    </div>
  )
}

export default Navbar