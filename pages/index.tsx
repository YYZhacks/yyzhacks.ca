import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../blocks/hero'
import Nav from '../blocks/navbar'

const Home: NextPage = () => {
  return (
  <main>
  <Nav />
  <Hero />

 </main>
  )
}

export default Home
