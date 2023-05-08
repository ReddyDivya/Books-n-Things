/*
  In next js, If you only have one layout for your entire application(Navbar, Footer), 
  we can create a Custom App and wrap our application with the layout. 
  Since the <Layout /> component is re-used when changing pages, its component state will be preserved (e.g. input values).
*/
import React from 'react';
import Head from 'next/head'; //head is same as in HTML. It gives some metadata about website.
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children}) => {

  return (
    <div className="layout">
        <Head>
           <title>Books-n-Things Store</title>
        </Head>
        {/*header - html5 header tag*/}
        <header>
            <Navbar/>
        </header>

        {/*main - html5 header tag*/}
        <main className="main-container">
          {children}
        </main>

        {/*footer - html5 header tag*/}
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default Layout