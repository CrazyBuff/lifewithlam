'use client'

import './navbar.css';
import Link from 'next/link';
import Image from 'next/image';
import image from '../../images/sheep_mascot.png';
import { useEffect, useState } from 'react';

export default function NavBar() {
    const [currentSelected, setCurrentSelected] = useState(null);
    const [menuActive, setMenuActive] = useState(true);


    const selectNav = (option) => {
        setCurrentSelected(option);
        if (window.innerWidth <= 1100) {
            setMenuActive(false);
        }
    }

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    }


    useEffect(() => {
        const handleMobileScreen = () => {
            if (window.innerWidth <= 1100) {
                setMenuActive(false);
            }
            else {
                setMenuActive(true);
            }
        }
        
        window.addEventListener('resize', handleMobileScreen)
    }, [])


    return (
        <div className="navbar-container">
            <div className='navbar-container-inner'>
                <div className="navbar-icon">
                    <Link href={'/'} >
                    <div onClick={() => selectNav(null)}><Image src={image} width={100}/></div>
                    </Link>
                </div>
                <div className={menuActive ? 'navbar-items-container' : 'navbar-items-container-inactive'}>
                    <ul className='navbar-items'>
                        <li>
                            <Link href={'/discover'} style={{ textDecoration: "none", color: "white" }}>
                                <div onClick={() => selectNav(0)} 
                                    className={currentSelected == 0 ? 'nav-underline' : null}>
                                    DISCOVER
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/about'} style={{ textDecoration: "none", color: "white" }}>
                                <div onClick={() => selectNav(1)} 
                                    className={currentSelected == 1 ? 'nav-underline' : null}>
                                    about
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/merch'} style={{ textDecoration: "none", color: "white" }}>
                                <div onClick={() => selectNav(2)} 
                                    className={currentSelected == 2 ? 'nav-underline' : null}>
                                    merch
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/contact'} style={{ textDecoration: "none", color: "white" }}>
                                <div onClick={() => selectNav(3)} 
                                    className={currentSelected == 3 ? 'nav-underline' : null}>
                                    contact
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <a onClick={() => toggleMenu()} href="#" class="toggle-button">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>
            </div>
        </div>
    )
}