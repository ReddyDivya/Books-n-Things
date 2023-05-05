/*
  Next.js is built around the concept of pages.
  Inside the pages directory, add the index.js file to get started. 
  This is the page that is rendered when the user visits the root of your application.
*/

import React from 'react';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

/*
  - This is where all the components are placed.
    #1 HeroBanner
    #2 Products
    #3 FooterBanner
  - populating the data from products, bannerData
  */
const Home = ({products, bannerData}) => {

  /*
  - products has information regarding all the books.  
  - bannerData has information regarding only one book which is shown in HeroBanner & FooterBanner.
  */

  return (
    <>
    {/* Showing hero banner */}
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>

    {/* Showing products like book cover, name, price */}
    <div className="products-heading">
      <h2>Best Selling Books in India</h2>
      <p>Books of many variations</p>
    </div>
    <div className="products-container">
      {
        products?.map((product) => <Product key={product._id} product={product}/> )
      }

      {/* Showing footer banner */}
      <FooterBanner footerBanner = {bannerData && bannerData[0]}/>
    </div>
    </>
  )
}

/*
  In next.js, we have to use getServerSideProps() to get data from sanity.
  This gets called on every request.

*/
export const getServerSideProps  = async () => {
  
  /*
    Fetch data from external API
  */
  
  // Products sanity query
  const query = `*[_type == "product"]`; //grab all products info
  const products = await client.fetch(query);//fetching info from the product query

  //Banner sanity query
  const bannerQuery = `*[_type == "banner"]`; //grab all Banner info
  const bannerData = await client.fetch(bannerQuery);//fetching info from the Banner query

  //returing the fetched data from the 'products' & 'bannerData' queires
  return {
    props: {products, bannerData}
  }
}//getServerSideProps 

export default Home;