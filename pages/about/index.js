import AboutPage from '@/component/aboutpage';
import LayoutPage from '@/component/layout';
import React from 'react'

function About() {
  return (
    <AboutPage/>
  )
}

About.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};



export default About;