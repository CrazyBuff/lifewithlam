import Footer from "../components/Footer"
import styles from '../components/navbar.css'

export default function MainLayout({ children }) {
    return (
        <>
            {children}
            <Footer/>
        </>
    )
}