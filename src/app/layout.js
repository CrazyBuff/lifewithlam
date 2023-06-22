import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Life with Lam',
  description: 'Life with Lam website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' />
      </head>
      <body className={inter.className}>
        <NavBar />
        <div className='body-content'>
          {children}
        </div>
      </body>

    </html>
  )
}
