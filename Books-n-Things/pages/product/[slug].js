/*
    Next.js supports pages with dynamic routes. 
    For example, if you create a file called pages/posts/[id].js, then it will be accessible at posts/1, posts/2, etc.
    The file name is in [] which means it's going to be dynamic
*/
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({product, products}) => {

/*
 product - to show a product details.
 products - to show all products in 'You may also like' section.
*/
  const {image, name, details, price} = product;
  const [index, setIndex] = useState(0);
  
  //fetching data(state variables, functions) from state context
  const {incQty, decQty, qty, onAdd, setShowCart, setQty} = useStateContext();
  
  
  console.log('qty >> '+ qty);

  //Buy Now functionality
  const handleBuyNow = () => {
    onAdd(product, qty);//add to cart

    setShowCart(true);//show cart
  }//handleBuyNow

  return (
    <div>
        <div className="product-detail-container">
            <div>
                <div className="image-container">
                    <img className="product-detail-image"
                    src={urlFor(image && image[index])}/>    
                </div>
                <div className="small-images-container">
                    {
                        image?.map((item, i) => (
                            <img key={i} src={urlFor(item)} 
                            className={i === index ? 'small-image selected-image' : 'small-image'} 
                            onMouseEnter={() => setIndex(i)}/>
                        ))
                    }
                </div>
            </div>
            <div className="product-detail-desc">
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
                <p className="price">₹{price}</p>
                <div className='quantity'>
                    <h3>Quantity:</h3>
                    <p className="quantity-desc">
                        <span className="minus"
                        onClick={decQty}><AiOutlineMinus/></span>
                        <span className="num">{qty}</span>
                        <span className="plus"
                        onClick={incQty}><AiOutlinePlus/></span>
                    </p>
                </div>
                <div className="buttons">
                    <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>
                        Add to Cart
                    </button>
                    <button type="button" className="buy-now" onClick={() => handleBuyNow()}>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
        <div className="maylike-products-wrapper">
            <h2>You may also like</h2>
            <div className="marquee">
                <div className="maylike-products-container track">
                    {
                        products.map((item) => (
                            <Product key={item._id} 
                            product={item}
                            /> 
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

/*
    The getStaticPaths function should return an object with the 
    following required properties: paths

    paths - The paths key determines which paths will be pre-rendered.

    Eg: Suppose that you have a page that uses Dynamic Routes named 
    pages/product/[slug].js. 
    If you export getStaticPaths from this page and return the following for paths:
*/
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
      /*
        - Get the paths we want to pre-render based on `products`
        - The value for each params object must match the parameters used in the page name.
        - If the page name is pages/products/[slug], then params should contain slug.
      */
      params: { 
        slug: product.slug.current //key and value should have same name
      }
    }));
    
    /*
     - We'll pre-render only these paths at build time.
     - { fallback: false } means other routes should 404.
    */
    return {
      paths,
      fallback: false  //this is one of the ways to set the fallback
    }
}//getStaticPaths

/*
    getStaticProps runs only on build time.
    -------------------------------------------
    In next.js, we have to use getStaticProps() 
    so that you can fetch the data about the post with this `slug` 
    and use it to pre-render the page.
*/  
export const getStaticProps = async ({ params: { slug }}) => {
    /*
    - params contains the product `slug`.
    - If the route is like /product/it-starts-with-us, then params.slug is `it-starts-with-us`
    -------------------------------------
    - Sanity query, 
    - Product & products queries
    */
     
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'
    
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
  
    /*
        Pass `products, product` data to the page via props
        ------------------------------------------------------
        By returning { props: { products, product } }, the ProductDetails component
        will receive `products, product` as a props at build time.
    */
    return {
      props: { products, product }
    }
}//getStaticProps

export default ProductDetails