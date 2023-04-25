import React from 'react';
import {client, urlFor} from '../lib/client.js';
import {HeroBanner, Product, FooterBanner} from '../components';

//populating the data from products, bannerData
const Home = ({products, bannerData}) => {
  return (
    <>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
    <div className="products-heading">
      <h2>Best Selling Books in India</h2>
      <p>Books of many variations</p>
    </div>
    <div className="products-container">
      {
        products?.map((product) => <Product key={product._id} product={product}/> )
      }

      <FooterBanner footerBanner = {bannerData && bannerData[0]}/>
    </div>
    </>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"]{
    slug{
      current
    }
  }`;

  const products = await client.fetch(query);

  {/* parenthesis followed by a cury brace which means we are instantly returning an object from a function*/}
  const paths = products.map((product) => ({
      params: {
        slug: product.slug.current
      }
  }));

  //returning the object
  return {
    paths,
    fallback : 'blocking' //this is one of the ways to set the fallback
  }
}//getStaticPaths

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