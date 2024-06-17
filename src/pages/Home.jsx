import React from 'react'
import BlogPage from '../components/BlogPage'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
      <Banner />
      {/* products */}
      <div className='max-w-7xl mx-auto'>
        <BlogPage />
      </div>
    </div>
  )
}

export default Home