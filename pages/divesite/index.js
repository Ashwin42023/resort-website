import DivesitePage from '@/component/divesitepage';
import LayoutPage from '@/component/layout';
import React from 'react'


function Divesite() {
  return (
    <DivesitePage/>
  )
}
Divesite.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};

export default Divesite