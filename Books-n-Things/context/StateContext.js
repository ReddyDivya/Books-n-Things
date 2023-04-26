//Maintains state 
import React, {createContext, useContext, useState, useEffect} from 'react';
import {toast} from 'react-hot-toast';

const Context = createContext();

const StateContext = ({children}) => {

  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState();
  const [qty, setQty] = useState(1);

  return (
    <div>
      StateContext
    </div>
  )
}

export default StateContext