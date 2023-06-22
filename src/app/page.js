import Image from 'next/image'
import Link from 'next/link'
import NavBar from './components/NavBar'
import styles from './home.css'
import image from '../images/hero_image.jpg'
import youtube from '../images/youtube logo.png'
import itunes from '../images/itunes logo.png'
import spotify from '../images/spotify logo.png'
import tiktok from '../images/tiktok logo.png'

export default function Home() {
  return (
    <div className='home-body'>
      <div className='hero-container'>
        <div className='hero-content flex-element'>
          <div className='hero-content-title'>life with lam</div>
          <div className='hero-content-text'>
            <p>for those struggling to find their why</p>
            <p>a passion project that seeks to uncover greater perspective</p>
            <p>an individual looking to defy the modern day career trajectory!</p>
          </div>
          <div className='hero-btns-container'>
            <div className='hero-btn hero-btn-1'>start watching</div>
            <div className='hero-btn hero-btn-2'>start listening</div>
          </div>
        </div>
        <div className='hero-image-container flex-element'>
          <Image fill className='hero-image' src={image} placeholder='blur'
            sizes='(max-width: 640px) 90vw, 33vw'
          />
        </div>
      </div>
      <div className='home-platforms-display'>
        <div className='platforms-display-title'>featured on.</div>
        <div className='platforms-container'>
          <div className='platform-logo-container'><Image fill className='platform-logo-image' src={spotify}/></div>
          <div className='platform-logo-container'><Image fill className='platform-logo-image' src={itunes}/></div>
          <div className='platform-logo-container'><Image fill className='platform-logo-image' src={youtube}/></div>
          <div className='platform-logo-container'><Image fill className='platform-logo-image' src={tiktok}/></div>
        </div>
      </div>
    </div>
  )
}

