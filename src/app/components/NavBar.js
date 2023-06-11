import styles from './navbar.css';
import Link from 'next/link';
import Image from 'next/image';
import image from '../../images/sheep_mascot.png';

export default function NavBar() {
    return (
        <div className="navbar-container">
            <div className="navbar-icon">
                <Link href={'/'} >
                <Image src={image} width={100}/>
                </Link>
                </div>
            <div className='navbar-container-inner'>
            
                <ul className='navbar-items'>
                    <li>
                        <Link href={'/discover'} style={{ textDecoration: "none", color: "white" }}>DISCOVER</Link>
                    </li>
                    <li>
                        <Link href={'/about'} style={{ textDecoration: "none", color: "white" }}>about</Link>
                    </li>
                    <li>
                        <Link href={'/merch'} style={{ textDecoration: "none", color: "white" }}>merch</Link>
                    </li>
                    <li>
                        <Link href={'/contact'} style={{ textDecoration: "none", color: "white" }}>contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}