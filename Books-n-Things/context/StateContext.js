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
  
  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id)
    
    
  }

  //increment Quantity
  const incQty = () => {
    setQty((prevQty) => prevQty + 1); //adding by 1 with the previous quantity value
  }

  //decrement Quantity
  const decQty = () => {
    setQty((prevQty) =>{
      if(prevQty -1 < 1) //because can't go less than 1 i.e negative values
        return 1;
      
      return prevQty - 1;
    }); //adding by 1 with the previous quantity value
  }


  return (
    /* We can  make use of showCart, cartItems,
        totalPrice, totalQuantities, qty all these values anywhere in the components*/
    <Context.Provider >
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty
      }}
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);