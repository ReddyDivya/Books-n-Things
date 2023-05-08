import React from 'react';
{
/*
  The Next.js router allows you to do client-side route transitions between pages, similar to a single-page application.
  / → pages/index.js
  /success → pages/success.js
  /product/it-starts-with-us → pages/product/[slug].js
*/
}
import Link from 'next/Link';
import { urlFor } from '../lib/client';

//destructuring HeroBanner for easy accessing the data
const HeroBanner = ({ heroBanner : 
  {smallText, midText, image, slug, buttonText, desc} }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{smallText}</p>
        {/* <h3>{midText}</h3> */}
        <h1>BOOKS</h1>
        <img src={urlFor(image)} alt="headphones" className="hero-banner-image" />
        <div>

          {/* 
            Linking to Dynamic Paths
          */}
          <Link href={`/product/${slug}`}>
            {/* Shop Now btn */}
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