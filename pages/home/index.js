import HomePage from '@/component/homepage'
import LayoutPage from '@/component/layout';
import Navbar from '@/component/layout/navbar'
import React from 'react'


function Home() {
  return (
    <HomePage/>
  )
}
Home.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};

export default Home