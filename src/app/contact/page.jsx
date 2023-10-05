'use client';
import Link from 'next/link';
import styles from '../style/contact.module.css';

function page() {
  return (
    <div className={styles.container}>
      <div>
        <div>
          <h1>Contact Information</h1>
          <br />
          <p>Here you can find all communication methods to contact with us.</p>
        </div>
        <div>
          <h3>Email: saifchan@mail.com</h3>
          <br />
          <h3>Phone No. : +962 799 562 745</h3>
        </div>
        <div className={styles.accounts}>
          <h2>Our Accounts :</h2>
          <ul>
            <li>
              <Link href={'#'}>
                <h3>account one</h3>
              </Link>
            </li>
            <li>
              <Link href={'#'}>
                <h3>account two</h3>
              </Link>
            </li>
            <li>
              <Link href={'#'}>
                <h3>account three</h3>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.form}>
          <h2>
            If there is any problem, or you want to ask about something, 
            you can send us a message:
          </h2>
          <br />
          <form action="">
            <input type="email" name="" id="" placeholder='email address' />
            <input type="text" name="" id="" placeholder='subject' />
            <textarea name="" id="" placeholder='message content' ></textarea>
            <button type="submit">send</button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default page;