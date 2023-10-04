'use client';
import React, {useState, useEffect} from 'react';
import styles from '../style/portfolio.module.css';
import Link from 'next/link';
import Image from 'next/image';
import fate from '../../../public/imgs/fate.png';
import sm from '../../../public/imgs/home.png';
import lp from '../../../public/imgs/landingPage.png';
import perfume from '../../../public/imgs/ScentChan.png';

function Galary() {

  let translate = 0;

  useEffect(() => {
    let galary = document.getElementById('galary');
    let leftBtn = document.getElementById('left-btn');
    let rightBtn = document.getElementById('right-btn');

    rightBtn.onclick = () => {
        if (translate < 480*(galary.childNodes.length-2)) {
            galary.style.transform = `translateX(-${translate+480}px)`;
            console.log(translate);
            translate+=480;
        }
        
    }
    leftBtn.onclick = () => {
        if (translate >= 480) {
            galary.style.transform = `translateX(-${translate-480}px)`;
            console.log(translate);
            translate-=480;
        }
    }
  }, [])

  return (
    <section className={styles.samples}>
        <h2>Samples of Our Work</h2>
        <br />
        <br />
        <div> 
            <div id='galary'>
                <div className={styles.sample}>
                    <Link href={'/projects/fate'}>
                    <Image src={fate} />
                    </Link>
                    <div></div>
                </div>
                <div className={styles.sample}>
                    <Link href={'/projects/social-media'}>
                    <Image src={sm} />
                    </Link>
                    <div></div>
                </div>
                <div className={styles.sample}>
                    <Link href={'/projects/landing-page'}>
                    <Image src={lp} />
                    </Link>
                    <div></div>
                </div>
                <div className={styles.sample}>
                    <Link href={'/projects/scentchan'}>
                    <Image src={perfume} />
                    </Link>
                    <div></div>
                </div>
                <div className={styles.sample}>
                    <Link href={'/projects/fate'}>
                    <Image src={fate} />
                    </Link>
                    <div></div>
                </div>
                <div className={styles.sample}>
                    <Link href={'/projects/landing-page'}>
                    <Image src={lp} />
                    </Link>
                    <div></div>
                </div>
            </div>
        </div>
        <button id='left-btn' className={styles.left}>
            <svg xmlns="http://www.w3.org/2000/svg" width="74" height="155" viewBox="0 0 74 155" fill="none">
                <path d="M70 151L7.68081 85.015C4.46905 81.6143 4.39775 76.3202 7.51676 72.8342L70 3" stroke="black" stroke-width="9"/>
            </svg>
          </button>
          <button id='right-btn' className={styles.right}>
            <svg xmlns="http://www.w3.org/2000/svg" width="74" height="155" viewBox="0 0 74 155" fill="none">
                <path d="M4 4L66.3192 69.985C69.531 73.3857 69.6023 78.6798 66.4832 82.1658L4 152" stroke="black" stroke-width="9"/>
            </svg>
          </button>
      </section>
  )
}

export default Galary;