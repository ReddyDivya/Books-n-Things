import React from 'react';
import Link from 'next/Link';//The Link component provides a method of client-side navigation within Next.js applications
import { urlFor } from '../lib/client';

//destructuring HeroBanner for easy accessing the data
const HeroBanner = ({ heroBanner : 
  {smallText, midText, image, product, buttonText, desc} }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{smallText}</p>
        {/* <h3>{midText}</h3> */}
        <h1>BOOKS</h1>
        <img src={urlFor(image)} alt="headphones" className="hero-banner-image" />
        <div>
          <Link href={`/product/${product}`}>

            {/* Sj*/}
            <button type="button">{buttonText}</button>
          </Link>
          <div className="desc">
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner