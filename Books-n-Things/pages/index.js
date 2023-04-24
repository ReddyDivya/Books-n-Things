import React from 'react'

const Home = () => {
  return (
    <>
    HeroBanner
    <div>
      <h2>Best Selling Books in India</h2>
      <p>Books of many variations</p>
    </div>
    <div>
      {
        ['Product1', 'Product2'].map((product, index) => product )
      }

      Footer
    </div>
    </>
  )
}

export default Home