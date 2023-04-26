import React from 'react';
import '../styles/globals.css';
import {Layout} from '../components';
import StateContext from '../context/StateContext';
import {Toaster} from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    //Wrapping in a Layout to have a Header, Footer for components
    <StateContext>
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
