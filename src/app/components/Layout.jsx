import Link from 'next/link';

function Layout({children}) {
  return (
    <div className='root'>
        <header>
            <h1>Name</h1>
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
  )
}

export default Layout;