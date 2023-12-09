import Image from 'next/image'
import styles from './page.module.css'
import Heading from './_components/heading/Heading'
import Facts from './_components/facts/Facts'
import Izbornik from './_components/izbornik/Izbornik'
import About from './_components/about/About'

export default function Home() {
  return (
    <>
      <Heading />
      <Facts />
      <Izbornik />
      <About />
    </>
  )
}