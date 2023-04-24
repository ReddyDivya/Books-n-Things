import React from 'react';
import {client} from '../lib/client';
import {HeroBanner, Product, FooterBanner} from '../components';

//populating the data from products, bannerData
const Home = ({products, bannerData}) => {
  return (
    <>
    <HeroBanner heroBanner={bannerData}/>
    <div className="products-heading">
      <h2>Best Selling Books in India</h2>
      <p>Books of many variations</p>
    </div>
    <div className="products-container">
      {
        products?.map((product) => product.name )
      }

      <FooterBanner/>
    </div>
    </>
  )
}

//In next.js, we have to use getServerSideProps() to get data from sanity
export const getServerSideProps  = async () => {
  //sanity query
  
  //Products
  const query = `*[_type == "product"]`; //grab all products info
  const products = await client.fetch(query);//fetching info from the product query

  //Banner
  const bannerQuery = `*[_type == "banner"]`; //grab all Banner info
  const bannerData = await client.fetch(bannerQuery);//fetching info from the Banner query

  //returing the fetched data from the 'product' & 'banner' queires
  return {
    props: {products, bannerData}
  }
}//getServerSideProps 

export default Home