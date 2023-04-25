import React from 'react';
import '../styles/globals.css';
import {Layout} from '../components';

function MyApp({ Component, pageProps }) {
  return (
    //Wrapping in a Layout to have a Header, Footer for components
    <Layout>
      {
        /* This component should be inside the Layout*/
        /* Eg: If we are in Product page, this is a Product compoennet*/
      }
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
