// import Image from "next/image";
import styles from '@/app/styles/styles.module.css';
import { PT_Serif } from 'next/font/google';
import RepelArt from '@/app/ui/repellArt';

const ptSerif = PT_Serif({
  variable: '--font-pt-serif',
  subsets: ["latin"],
  weight: ["400", "700"]
});

export default function Home() {
  return (
    <>
      <div className={styles.landing}>
        <div className={`${styles.landingName} ${ptSerif.className}`}>Ava Park</div>
      </div>
      <RepelArt />
    </>
  );
}
