import React from 'react';
import Head from 'next/head'; //head is same as in HTML. It gives some metadata about website.
import Navbar from './Navbar';

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
        {/*header - html5 header tag*/}
        <main className="main-container">

        </main>
    </div>
  )
}

export default Layout