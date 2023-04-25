//The file name is in [] which means it's going to be dynamic

import React from 'react';
import {client, urlFor} from '../../lib/client';

const ProductDetails = ({product, products}) => {
    
  const {image, name, details, price} = product;

  return (
    <div>
        <div className="product-detail-container">
            <div>
                <div className="image-container">
                    <img src={urlFor(image && image[0])} 
                    />    
                </div>
            </div>
        </div>
    </div>
  )
}

/*
    In next.js, we have to use getStaticProps() 
    the data required to render the page is available at build time ahead of a user's request
    the data comes from a headless CMS
*/    
export const getStaticProps  = async ({params : {slug}}) => {
    //sanity query
    //Products
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`; //fetch the first product info
    const productQuery = `*[_type == "product"]`; //to fetch all the products

    const product = await client.fetch(query);//fetching info from the product query
    const products = await client.fetch(productQuery);//fetching info from the product query
    
    // //Banner
    // const bannerQuery = `*[_type == "banner"]`; //grab all Banner info
    // const bannerData = await client.fetch(bannerQuery);//fetching info from the Banner query
  
    //returing the fetched data from the 'product' & 'products' queires
    return {
      props: {products, products}
    }
  }//getStaticProps 

export default ProductDetails