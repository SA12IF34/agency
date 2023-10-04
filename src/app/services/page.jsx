import Link from 'next/link';
import styles from '../style/services.module.css';

function page() {
  return (
    <div className={styles.container}>
        <div>
            <div>
                <h1>Our Services</h1>
                <br />
                <br />
                <p>Here you will find our all services, and some details about each service.</p>
            </div>
            <br />
            <br />
            <div className={styles.services}>
                <div className={styles.service}>
                    <p>
                    Building websites that are about individuals. You can give us the design of your website, 
                    or you can let us design it in a way which suits with your career, skills, projects, and 
                    strengthen and weakness points. 
                    </p>
                </div>
                <div className={styles.service}>
                    <p>
                    We offer building business websites such as ecommerce websites, organization websites, 
                    and educational platforms. We provide you with comprehensive functionality, high performance,
                    and SEO friendly websites.
                    Of course, as the design is a crucial phase in building business websites, We take care of it.
                    </p>
                </div>
                <div className={styles.service}>
                    <p>
                    We can build you a comprehensive Content Management System that gives you the full 
                    control over you contents. We provide you with a broad system which covers all your 
                    requirements for personal or professional use.
                    </p>
                </div>
                <div className={styles.service}>
                    <p>
                    Building any type of Landing Pages wih beautiful design, user friendly structure, and an 
                    attractive CTA (Call To Action).
                    </p>
                </div>
            </div>
            <br />
            <br />
            <div>
                <h2>If you are interested to work with us:</h2>
                <br />
                <div className={styles.links}>
                    <Link href={'/portfolio'}>
                        <div>
                            <h3>See some samples of our work</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="146" height="30" viewBox="0 0 146 30" fill="none">
                                <path d="M145.414 16.4142C146.195 15.6332 146.195 14.3668 145.414 13.5858L132.686 0.857864C131.905 0.0768156 130.639 0.0768156 129.858 0.857864C129.077 1.63891 129.077 2.90524 129.858 3.68629L141.172 15L129.858 26.3137C129.077 27.0948 129.077 28.3611 129.858 29.1421C130.639 29.9232 131.905 29.9232 132.686 29.1421L145.414 16.4142ZM0 17H144V13H0V17Z" fill="black"/>
                            </svg>
                        </div>
                    </Link>
                    or
                    <Link href={'/contact'}>
                        <div>
                            <h3>Contact us and let’s start work</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="146" height="30" viewBox="0 0 146 30" fill="none">
                                <path d="M145.414 16.4142C146.195 15.6332 146.195 14.3668 145.414 13.5858L132.686 0.857864C131.905 0.0768156 130.639 0.0768156 129.858 0.857864C129.077 1.63891 129.077 2.90524 129.858 3.68629L141.172 15L129.858 26.3137C129.077 27.0948 129.077 28.3611 129.858 29.1421C130.639 29.9232 131.905 29.9232 132.686 29.1421L145.414 16.4142ZM0 17H144V13H0V17Z" fill="black"/>
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page