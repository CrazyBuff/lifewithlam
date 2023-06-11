import styles from './navbar.css';
import Image from 'next/image';
import image from '../../images/sheep_mascot.png';
import Link from 'next/link';

export default function NavBar() {
    return (
        <div className="navbar-container">
            <div className="icon">
                <Image src={image}></Image>
            </div>
            <ul className='navbar-items'>
                <li>
                    DISCOVER
                </li>
                <li>
                    <Link href={'/about'}>ABOUT</Link>
                </li>
                <li>
                    MERCH
                </li>
                <li>
                    CONTACT
                </li>
            </ul>
        </div>
    )
}