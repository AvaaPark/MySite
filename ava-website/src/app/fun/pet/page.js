'use client'

import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Funnel_Sans } from 'next/font/google';
import styles from '@/app/styles/pet.module.css';

const funnelSans = Funnel_Sans({
    variable: '--font-funnel-sans',
    subsets: ["latin"],
    weight: ["400", "700"]
})

export default function PetBoarding() {
    useGSAP(() => {
        gsap.to("#text", {
            delay: 0.01,
            ease: "power1.in",
            y: 0
        })
    });

    return(
        <div>
            <div className={styles.landing}>
                <div className={styles.navigation}>
                    {/* <div className={styles.logo} /> */}
                    <img className={styles.logo} src="/bork-box/bork-box-just-dog.svg"></img>
                </div>
                <video
                    className={styles.landingVideo}
                    src="/bork-box/dog-video.mp4"
                    autoPlay
                    playsInline
                    loop
                    muted
                />
                <div className={styles.landingTextWrapper}>
                    <p id="text" className={`${styles.landingText} ${funnelSans.className}`}>What's for dinner?</p>
                </div>
            </div>
            <section className={styles.info}>
                Blah blah placeholder
            </section>
        </div>
    )
}