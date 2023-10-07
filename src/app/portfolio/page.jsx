import Link from 'next/link';
import Image from 'next/image';
import styles from '../style/portfolio.module.css';
import Galary from '../components/Galary';
import lp from '../../../public/imgs/landingPage.png';
import perfume from '../../../public/imgs/ScentChan.png';


export const metadata = {
  title: "DigitalElevate | Portfolio",
  description: "work portfolio",
}

function page() {

  return (
    <div className={styles.container}> 
      <Galary />
      <section className={styles.studyCase}>
        <h2>A Study Case of Our Work</h2>
        <br />
        <br />
        <div>
          <div className={styles.imgs}>
            <Image className={styles.one} src={lp} />
            <Image className={styles.two} src={perfume} />
          </div>
          <div className={styles.content}>
            <h3>Perfumes Ecommerce</h3>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Corrupti, nulla neque impedit nostrum, minima sunt odit cumque aspernatur accusantium assumenda aut, 
              cupiditate a amet! Molestias dignissimos ex similique nobis laborum.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.contact}>
        <h2>If you liked our work and want us to build your next project</h2>
        <br />
        <Link href={'/contact'}>
          <h3>Contact us</h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="146" height="30" viewBox="0 0 146 30" fill="none">
              <path d="M145.414 16.4142C146.195 15.6332 146.195 14.3668 145.414 13.5858L132.686 0.857864C131.905 0.0768156 130.639 0.0768156 129.858 0.857864C129.077 1.63891 129.077 2.90524 129.858 3.68629L141.172 15L129.858 26.3137C129.077 27.0948 129.077 28.3611 129.858 29.1421C130.639 29.9232 131.905 29.9232 132.686 29.1421L145.414 16.4142ZM0 17H144V13H0V17Z" fill="black"/>
          </svg>
        </Link>
      </section>
    </div>
  )
}

export default page;