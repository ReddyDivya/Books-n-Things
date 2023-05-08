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
  pageProps is an object with the initial props that were preloaded for your page by one of our data fetching methods, otherwise it's an empty object.
*/
function MyApp({ Component, pageProps }) {
  return (
    
    <StateContext>
      
      {/*
        In next js, If you only have one layout for your entire application(Navbar, Footer), 
        we can create a Custom App and wrap our application with the layout. 
        Since the <Layout /> component is re-used when changing pages, its component state will be preserved (e.g. input values).
      */
      }
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
