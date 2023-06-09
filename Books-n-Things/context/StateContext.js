//Maintaining state management
import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-hot-toast';//Adding beautiful notifications

/*
createContext()
  - creating context to maintain state management
  - returns context object to use wherever we want the data
*/
const Context = createContext();//initializing createContext

export const StateContext = ({children}) => {

  const [showCart, setShowCart] = useState(false); //shows cart
  const [cartItems, setCartItems] = useState([]); //cart items
  const [totalPrice, setTotalPrice] = useState(0); //total price
  const [totalQuantities, setTotalQuantities] = useState(0); //total quantities
  const [qty, setQty] = useState(1); //quantity

  let foundProduct;
  let index;
  
  //add items to cart
  const onAdd = (product, quantity) => {
  
    /*
      Checking whether the product is already in the cart or not.
      If its already in the cart just increase the quantity.
    */
    const checkProductInCart = cartItems.find((item) => item._id === product._id);

    //updating the states
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity );

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
    
    //show notification
    toast.success(`${qty} ${product.name} added to the cart.`); //disclosing the pop message
  }//onAdd

  //remove items from cart
  const onRemove = (product) => {
    //checking is removing item is in the cart items or not.
    foundProduct = cartItems.find((item) => item._id === product._id);//cart item
    const newCartItems = cartItems.filter((item) => item._id !== product._id);//filtering the items 

    setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.price * foundProduct.quantity);
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
    setCartItems(newCartItems);
  }//onRemove

  //toggling the cart items quantity in cart component
  const toggleCartItemQuanitity = (id, value) => {
    //id - item_id, value - inc/dec
    //finidng the product
    foundProduct = cartItems.find((item) => item._id === id)
    
    //finidng index of the item
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id)

    //increment case
    if(value === 'inc') {
      //updating with current cart items, adding new product{object}, and increasing quantity by 1
      setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
      
      //updating the total price
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
      
      //updating the total quantities
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
    } else if(value === 'dec') //decrement case
     {
      if (foundProduct.quantity > 1) //we can't lower the quantity if it's less than 1
      {
        //updating with current cart items, adding new product{object}, and decreasing quantity by 1
        setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
        
        //updating the total price  
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
        
        //updating the total quantities
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
      }
    }
  }//toggleCartItemQuanitity

  //increasing the quantities
  const incQty = () => {
    setQty((prevQty) => prevQty + 1); //adding by 1 with the previous quantity value
  }

  //decreasing the quantities
  const decQty = () => {
    setQty((prevQty) =>{
      if(prevQty - 1 < 1) //because can't go less than 1 i.e negative values
        return 1;
      
      return prevQty - 1;
    }); //adding by 1 with the previous quantity value
  }

  return (
    /*
      Context Provider:
      - to wrap the tree of components that need the state Context.
      - Wrap child components in the Context Provider and supply the state value.
      - We can  make use of all the values like showCart, setShowCart etc., mentioned below wherever we wanted in the chidren components.
    */
        <Context.Provider
        value={{
          showCart,
          setShowCart,//() - sets the cart items to show the count

          //shows cart items
          cartItems,
          setCartItems, //() - sets the cart items
          onAdd, //() - adds items to cart
          onRemove, //() - removes items from cart
          
          totalPrice,
          setTotalPrice, //() - sets total price of all the items

          totalQuantities,
          setTotalQuantities, //() - sets total quantites of all the items

          qty,
          incQty,
          decQty,
          toggleCartItemQuanitity,//() - toggles cart item quantities in cart component
        }}
      >
        {/* all children components in this tree will have access to the user Context */}
        {children}
      </Context.Provider>
  )
}

/*
useContext(context):
  - to use the Context in a child component, we need to access it using the useContext Hook
  - we can access the user Context in all children components with the given name like useStateContext
*/
export const useStateContext = () => useContext(Context);