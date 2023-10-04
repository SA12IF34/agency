import Link from 'next/link';
import styles from '../style/about.module.css'

function page() {
  return (
    <div className={styles.container}>
        <div>
            <div className={styles.content}>
                <h1>Welcome</h1>
                <br />
                <br />
                <p>
                We are an agency which provides web development services with low cost and high quality. Our purpose is to make your project a real and successful business.
                <br /><br />
                We are experienced in building various types of websites, so we can build you your dream project.
                <br /><br />
                You have the full control over the project and how it looks, as we will solve any bugs that appears within one month after deploying the project for free. 
                </p>
            </div>
            <br />
            <br />
            <div className={styles.links}>
                <h2>If you are interested about us, you can take a look at:</h2>
                <br />
                <div>
                    <Link href={'/services'}>
                        <button className={styles.services}>
                            <h2>Our Services</h2>
                        </button>
                    </Link>
                    <Link href={'/portfolio'}>
                        <button className={styles.portfolio}>
                            <h2>Portoflio</h2>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page;