import NavBar from "../components/NavBar"
import styles from "./about.css"
import Image from 'next/image';
import image from '../../images/hyun joong.jpg';

export default function About() {
    
    return (
        <div>
            <div>
                 <NavBar />
            </div>

            <div className="shit-tester">
                
                <div>
                    <Image src={image} className="about-image"></Image>
                </div>
            </div>
           
        </div>

        
        
        
        
    )
    
}