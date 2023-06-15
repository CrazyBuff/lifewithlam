import Image from 'next/image'
import Link from 'next/link'
import NavBar from './components/NavBar'
import styles from './home.css'
import image from '../images/hero image.png'

export default function Home() {
  return (
    <>
      <div className='home-body'>
        <div className='home-body-inner'>
          <div className='hero-content'>
            <div className='hero-content-title'>life with lam</div>
            <div className='hero-content-text'>
              <p>for those struggling to find their why</p>
              <p>a passion project that seeks to uncover greater perspective</p>
              <p>an individual looking to defy the modern day career trajectory!</p>
            </div>
          </div>
          <div className='hero-image-container'>
            <Image src={image}/>
          </div>
        </div>
      </div>
    </>
  )
}

