import ContactPage from '@/component/contactpage';
import HomePage from '@/component/homepage'
import LayoutPage from '@/component/layout';
import Navbar from '@/component/layout/navbar'
import React from 'react'


function Contact() {
  return (
    <ContactPage/>
  )
}
Contact.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};

export default Contact