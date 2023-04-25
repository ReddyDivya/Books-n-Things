import React from 'react';
import Head from 'next/head'; //head is same as in HTML. It gives some metadata about website.
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {

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
          EMPTY
        </main>

        {/*footer - html5 header tag*/}
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default Layout