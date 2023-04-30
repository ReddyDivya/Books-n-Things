import React from 'react';
import Link from 'next/Link';
import {urlFor}  from '../lib/client.js';

const FooterBanner = ({footerBanner : 
  {discount, largeText1, largeText2, saleTime, 
  smallText, midText, desc, product, buttonText, image}}) => {

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
          <Link href={`/product/${product}`}>
              <button type="button">
                {buttonText}
              </button>
          </Link>  
        </div>
        <img src={urlFor(image)} className="footer-banner-image"/>
      </div>
    </div>
  )
}

export default FooterBanner