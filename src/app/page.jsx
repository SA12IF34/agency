import Image from 'next/image';
import Link from 'next/link';
import bg from '../../public/heroBg.jpg';
import styles from './style/page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.hero}>
        <div className={styles.img}>
        <Image src={bg} alt='background' />
        </div>
        <div >
          <div>
            <h1>High Quality Website Development Services</h1>
            <h4>
              Get functional and high performance
              website that fits your business or personal
              requirements
            </h4>
          </div>
        </div>
      </main>
      <div className={styles.content}>
        <section className={styles.websites}>
          <h2>We can build you a website whether it is a</h2>
          <br/>
          <br/>
          <div >
            <div>
              <div>
                <h3>
                  Personal Website
                </h3>
              </div>
              <br/>
              <p>
              We can build you any kind of personal websites such as portfolio website, 
              or blog website, And customizing it to fit your sense.
              </p>
            </div>

            <div>
              <div>
                <h3>
                  Business Website
                </h3>
              </div>
              <br/>
              <p>
              Whether you want a startup website or e-commerce website, 
              We can build it with attractive design and comprehensive functionality, 
              as it will be SEO friendly.
              </p>
            </div>

            <div> 
              <div>
                <h3>CMS</h3>
              </div>
              <br />
              <p>
              We can build custom CMS (Content Management System) 
              that fits your requirements for your personal or business use. 
              It’s comprehensive functionality will ease managing your website’s content.
              </p>
            </div>

          </div>
        </section>
       
        <section>
            <h2>What working with us means</h2>
            <br/>
            <p>
            It means to guarantee the quality, performance, security, 
            and the optimization of SEO & UI/UX of your website. 
            </p>
        </section>
        
        <section className={styles.developmentModel}>
          <h2>How we develop websites</h2>
          <br/>
          <p>
          We use several SDLC (Software Development Life Cycle) methodologies for building website projects depending on factors such as project scale, 
          project functionality, time, project requirements, and more...
          </p>
          <br/>
          <br/>
          <div>
            <h2>Our main model for building projects</h2>
            <br/>
            <br/>
            <div>
            
              <div>
                <div>
                  <h3>Planning & Analysis</h3>
                </div>
                <br/>
                <p>
                We assemble the data about the project and all possible requirements, as making 
                sure that there is no any ambiguous or missed requirement.
                </p>
              </div>

              <div>
                <div>
                  <h3>Design</h3>
                </div>
                <br/>
                <p>
                depending on gathered data and requirements, 
                we design the system of the website and define how it works.
                </p>
              </div>

              <div>
                <div>
                  <h3>Impelementation</h3>
                </div>
                <br/>
                <p>
                Here, based on the design we came with, we start developing 
                the website in form of small units and test each unit.
                </p>
              </div>

              <div>
                <div>
                  <h3>Testing</h3>
                </div>
                <br/>
                <p>
                We integrate and test all the units.
                </p>
              </div>

              <div>
                <div>
                  <h3>Deployment</h3>
                </div>
                <br/>
                <p>
                When we finish from testing phase with no problems, 
                we deploy the project.
                </p>
              </div>

              <div>
                <div>
                  <h3>Maintenance</h3>
                </div>
                <br/>
                <p>
                If any issues appeared, 
                we take the responsibility of fixing them for free.
                </p>
              </div>
            
            </div>
          </div>
        </section>
          
        <section className={styles.work}>
          <Link href={'/portolio'}>
            <h2>See some samples of our work and build trust.</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="146" height="30" viewBox="0 0 146 30" fill="none">
              <path d="M145.414 16.4142C146.195 15.6332 146.195 14.3668 145.414 13.5858L132.686 0.857864C131.905 0.0768156 130.639 0.0768156 129.858 0.857864C129.077 1.63891 129.077 2.90524 129.858 3.68629L141.172 15L129.858 26.3137C129.077 27.0948 129.077 28.3611 129.858 29.1421C130.639 29.9232 131.905 29.9232 132.686 29.1421L145.414 16.4142ZM0 17H144V13H0V17Z" fill="black"/>
            </svg>
          </Link>
        </section>
        
        <section className={styles.contact}> 
          <h2>We ae interested to hear about your next project and building it.</h2>
          <br/>
          <Link href={'/contact'}>
            <button>
              <h2>Contact Us</h2>
            </button>
          </Link>
        </section>
      </div>
    </div>
  )
}
