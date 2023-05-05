import React from 'react';
import { Toaster } from 'react-hot-toast';//for beautiful notifications
import { Layout } from '../components';
import { StateContext } from '../context/StateContext';

/*
  In next js, to add a stylesheet to our application, import the CSS file within pages/_app.js.
  We may only import them inside pages/_app.js
*/  
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    //Wrapping in a Layout to have a Header, Footer for components
    <StateContext>
      {/* Placing each & every component within Layout.*/}
      
      <Layout>
      {/* Add beautiful notifications */}
        <Toaster/>  
        {
          /* This component should be inside the Layout*/
          /* Eg: If we are in Product page, this is a Product compoennet*/
        }
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

// This default export is required in a new `pages/_app.js` file.
export default MyApp
