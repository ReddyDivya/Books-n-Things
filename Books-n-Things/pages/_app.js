/*
  Next.js uses the App component to initialize pages.
  We can override it and control the page initialization &
  Persist layouts between page changes
  Keeping state when navigating pages
  Inject additional data into pages
  Add global CSS only in this file ie. _app.js

  Note: 
  To override the default App, create the file pages/_app.js  
*/
import React from 'react';
import { Toaster } from 'react-hot-toast';//for beautiful notifications
import { Layout } from '../components';
import { StateContext } from '../context/StateContext';

/*
  In next js, to add a stylesheet to our application, import the CSS file within pages/_app.js.
  globals.css file should be imported only inside pages/_app.js.
*/
import '../styles/globals.css';

/*
  Component prop is the active page. So whenever you navigate between routes, Component will change to the new page.
*/
function MyApp({ Component, pageProps }) {
  return (
    
    <StateContext>
      
      {/* Placing each & every component within Layout Component to have a Header, Footer for all of them. */}
      <Layout>
      {/* Add beautiful notifications */}
        <Toaster/>
        {
          /* This component should be inside the Layout
           Eg: If we are in Product page, this is a Product component*/
        }
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

// This default export is required in a new `pages/_app.js` file.
export default MyApp
