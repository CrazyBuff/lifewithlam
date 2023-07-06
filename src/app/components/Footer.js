'use client'

import './footer.css'
import logo from '../../images/sheep_mascot.png'
import Image from 'next/image'
import spotify from '../../images/footer-spotify.png'
import apple from '../../images/footer-apple.png'
import youtube from '../../images/footer-youtube.png'
import tiktok from '../../images/footer-tiktok.png'
import { useFormik } from 'formik'


export default function Footer() {
    const formik = useFormik({
        initialValues: {
            email: ""
        },

        onSubmit: (values) => {
            console.log(values);
        }
    })

    return (
        <>
            <div className='footer-container'>
                <div className='footer-content-wrapper'>
                    <div className='footer-upper-section'>
                        <div className='footer-upper-section-container'>
                            <div className='footer-logo-container'>
                                <div className='footer-logo-image-container'><Image fill src={logo} className='footer-logo-image' alt='image of Jadyn'/></div>
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
                        <div className='footer-subscription-section'>
                            <form onSubmit={formik.handleSubmit}>
                                <input 
                                    type='text'
                                    name='email' 
                                    placeholder='Email Address' 
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div className='footer-lower-section'>
                        <div className='footer-copyright-tag'>&#169; Copyright 2023</div>
                        <div className='footer-social-media'>
                            <div><Image src={spotify} fill className='footer-image-icon' alt='spotify icon'/></div>
                            <div><Image src={apple} fill className='footer-image-icon' alt='apple icon'/></div>
                            <div><Image src={youtube} fill className='footer-image-icon' alt='youtube icon'/></div>
                            <div><Image src={tiktok} fill className='footer-image-icon' alt='tiktok icon'/></div>
                        </div>
                    </div>
                </div>
                <div className='footer-line-break'></div>
            </div>
        </>
    )
}