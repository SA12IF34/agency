import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo.jpg'

function Layout({children}) {
  return (
    <>
      <div className='root'>
        <header>
            <Link href={'/'}>
              <Image src={logo} />
            </Link>
            <ul>
                <li>
                  <Link href={'/about'}>About</Link>
                </li>
                <li>
                  <Link href={'/services'}>Services</Link>
                </li>
                <li>
                  <Link href={'/portfolio'}>Portfolio</Link>
                </li>
                <li>
                  <Link href={'/contact'}>Contact</Link>
                </li>
            </ul>
        </header>
        {children}
        <footer>
            <span>copyright &#169; {new Date().getFullYear()}</span>
        </footer>
    </div>
    </>
  )
}

export default Layout;