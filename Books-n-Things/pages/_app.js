import React from 'react';
import { Toaster } from 'react-hot-toast';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
     <Component {...pageProps} />
  )
}

export default MyApp
