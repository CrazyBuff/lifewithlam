import Footer from "../components/Footer"
import styles from '../components/navbar.css'
import './layout.css'

export default function MainLayout({ children }) {
    return (
        <div id="page-container">
            <div id="content-wrap">
                {children}
            </div>
            <Footer/>
        </div>
    )
}