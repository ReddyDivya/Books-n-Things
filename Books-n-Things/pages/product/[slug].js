//The file name is in [] which means it's going to be dynamic
import React from 'react';
import {client, urlFor} from '../../lib/client';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

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
                {/* <div className="small-images-container">
                    {
                        image?.map((item, i) => (
                            <img src={urlFor(item)} 
                            className="" onMouseEnter=""/>
                        ))
                    }
                </div> */}
            </div>
            <div className="product-details-desc">
                <h1>{name}</h1>
                <div className="reviews">
                    <div>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiOutlineStar />
                    </div>
                    <p>
                        (20)
                    </p>
                </div>
                <h4>Details:</h4>
                <p>{details}</p>
            </div>
        </div>
    </div>
  )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;
  
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
      fallback: 'blocking' //this is one of the ways to set the fallback
    }
}//getStaticPaths

/*
    In next.js, we have to use getStaticProps() 
    the data required to render the page is available at build time ahead of a user's request
    the data comes from a headless CMS
*/  
export const getStaticProps = async ({ params: { slug }}) => {
    //sanity query
    //Product & products queries
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'
    
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
  
    console.log(product);
  
    return {
      props: { products, product }
    }
}//getStaticProps

export default ProductDetails