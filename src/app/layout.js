import './globals.css';
import { Inter } from 'next/font/google'
import Layout from './components/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DigitalElevate Agency',
  description: 'Web Development Services Agency'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
