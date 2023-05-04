import React from 'react';
import { Toaster } from 'react-hot-toast';//for beautiful notifications
import { Layout } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    //Wrapping in a Layout to have a Header, Footer for components
    <StateContext>
      {/* Placing each & every component within Layout.*/}
      <Layout>
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

export default MyApp
