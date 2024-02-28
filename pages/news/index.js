import LayoutPage from '@/component/layout';
import Newspage from '@/component/newspage';
import React from 'react'


function News() {
  return (
    <Newspage/>
  )
}
News.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};

export default News