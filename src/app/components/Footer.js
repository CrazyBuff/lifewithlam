import styles from './footer.css'
import logo from '../../images/sheep_mascot.png'
import Image from 'next/image'


export default function Footer() {
    return (
        <>
            <div className='footer-container'>
                <div className='footer-upper-section'>
                    <div className='footer-upper-section-container'>
                        <div className='footer-logo-container'>
                            <div className='footer-logo-image-container'><Image fill src={logo} className='footer-logo-image'/></div>
                            <div className='footer-logo-name'>life with lam</div>
                        </div>
                        <div className='footer-info-container'>
                            <div className='footer-info-index-container'>
                                <div className='footer-info-title'>Index</div>
                                <ul>
                                    <li>Discover</li>
                                    <li>About</li>
                                    <li>Merch</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            <div className='footer-inner-info-container'>
                                <div className='footer-info-title'>Info</div>
                                <ul>
                                    <li>Privacy Policy</li>
                                    <li>Shipping & Delivery</li>
                                    <li>Return & Exchange</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-lower-section'>

                </div>
            </div>
        </>
    )
}