import Image from 'next/image'
import Link from 'next/link'
import NavBar from './components/NavBar'

export default function Home() {
  return (
    <>
      <NavBar />
      <div> Hello World</div>
      <Link href="/about">Go to About</Link>
    </>
  )
}

