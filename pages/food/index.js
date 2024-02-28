import FoodPage from '@/component/foodpage';
import HomePage from '@/component/homepage'
import LayoutPage from '@/component/layout';
import Navbar from '@/component/layout/navbar'
import React from 'react'


function Food() {
  return (
    <FoodPage/>
  )
}
Food.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};

export default Food