'use client'

import styles from '@/app/styles/logo.module.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Logo() {
    useGSAP(() => {
        gsap.to("#logo", {
            opacity: 1,
            duration: "1.5",
            ease: "power1.in"
        })
    });
    
    return(
        <div id="logo" className={`${styles.logo}`}>
            Rebecca Park
        </div>);
};