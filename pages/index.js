import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HomePage from '@/component/homepage'
import LayoutPage from '@/component/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <HomePage/>
  )
}
Home.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};
    
