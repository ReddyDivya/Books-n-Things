//Maintains state 
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({children}) => {

  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);
  
  const onAdd = (product, quantity) => {

    //checking whether the product is already in the cart or not
    const checkProductInCart = cartItems.find((item) => item._id === product._id);
    
    //updating the states
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + totalQuantities);

    //if the product is already in the cart, just increase the quantity
    if(checkProductInCart)
    {
      //updating cart items
      const updatedCartItems = cartItems.map((cartProduct) => {
          if(cartProduct._id === product._id)
          return {
            ...cartProduct,  //cart items
            quantity: cartProduct.quantity + quantity //quantity - newly updated quantity
          }
      })

      setCartItems(updatedCartItems);//updating cart
    }
    else{
      product.quantity = quantity;//updating quantity
      
      setCartItems([...cartItems, {...product}]); //first adding the existing cart items and in addition to that adding new product info
    }
    
    toast.success(`${qty} ${product.name} added to the cart.`); //disclosing the pop message
  }

  //increment Quantity
  const incQty = () => {
    setQty((prevQty) => prevQty + 1); //adding by 1 with the previous quantity value
  }

  //decrement Quantity
  const decQty = () => {
    setQty((prevQty) =>{
      if(prevQty - 1 < 1) //because can't go less than 1 i.e negative values
        return 1;
      
      return prevQty - 1;
    }); //adding by 1 with the previous quantity value
  }


  return (
    /* We can  make use of showCart, cartItems,
        totalPrice, totalQuantities, qty all these values anywhere in the components*/
        <Context.Provider
          value={{
            showCart,
            setShowCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            incQty,
            decQty,
            onAdd,
            setCartItems,
            setTotalPrice,
            setTotalQuantities
          }}>  
        {children}
      </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);
