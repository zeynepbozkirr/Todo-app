import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Components from "../components"
export default function Home() {
  return (
    <div className={styles.container}>
      <Components/>

    </div>
  )
}
