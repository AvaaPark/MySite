'use client'

// import Image from "next/image";
import styles from '@/app/styles/styles.module.css';
import { PT_Serif } from 'next/font/google';
import * as motion from 'motion/react-client';

const ptSerif = PT_Serif({
  variable: '--font-pt-serif',
  subsets: ["latin"],
  weight: ["400", "700"]
});

export default function Home() {
  return (
    <>
      <div className={styles.landing}>
        <div className={`${styles.landingName} ${ptSerif.className}`}>Rebecca Park</div>
      </div>
      {/* <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => console.log('hover started!')}
      >Yo</motion.button> */}
    </>
  );
}
