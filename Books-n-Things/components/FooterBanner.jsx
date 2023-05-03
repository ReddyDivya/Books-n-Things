import React from 'react';
import Link from 'next/Link'; //The Link component provides a method of client-side navigation within Next.js applications
import {urlFor} from '../lib/client.js';
import { useStateContext } from '../context/StateContext';

//destructuring FooterBanner for easy accessing the data
const FooterBanner = ({footerBanner : 
  {discount, largeText1, largeText2, saleTime, 
  smallText, midText, desc, buttonText, image}}) => {

  //fetching data(state variables, functions) from state context
  const {setShowCart} = useStateContext();

  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <h3>{discount}</h3>
          {/* <h3>{largeText2}</h3> */}
          <p>{saleTime}</p>
        </div>

        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href="/">
            <button
                type="button"
                onClick={() => setShowCart(false)}
            >
              {buttonText} {/* Shop Now btn*/}
            </button>
          </Link>
        </div>
        <img src={urlFor(image)} className="footer-banner-image"/>
      </div>
    </div>
  )
}

export default FooterBanner