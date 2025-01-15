'use client'

import styles from '@/app/styles/logo.module.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Logo() {
    useGSAP(() => {
        gsap.to("#logo", {
            rotation: "+=360"
        })
    });
    
    return(
        <div id="logo" className={`${styles.logo}`}>
            <p>Ava<br/>Park</p>
        </div>);
};