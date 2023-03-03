'use client'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import {useContext} from "react"
import { JaponAuthContext, JaponAuthProvider } from '@/context/JaponAuthProvider'
import Loading from './loading'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const auth = useContext(JaponAuthContext);

  if(auth.isLoading) {
    return (<Loading />)
  }

  return (
      <main className={styles.main}>
        <div>{auth.firebaseUser?.uid}</div>
      </main>
  )
}
