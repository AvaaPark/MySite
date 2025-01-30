import Image from 'next/image';
import styles from '@/app/styles/about.module.css';
import { roboto, inter, hankenGrotesk, robotoFlex, notoSans } from '../layout';

const Intro = () => {
    return(
        <div className={`${notoSans.className}`}>
            <p>Hi, I'm Rebecca. I'm a frontend developer with excitement for all things visually intriguing.
                <br />I love simple things in life - 
                <br />  calm mornings,
                <br />  when lights turn off in the theater,
                <br />  browsing in grocery stores,
                <br />  and when chopped garlic sizzles in oil.
                <br />In 2025 I promised myself that I will create more and consume less.
            </p>
        </div>
    )
}

export default function About() {
    return (
        <>
            <div className="flex">
                <div>
                    <Image
                        className={styles.profileImage}
                        src="/profile.jpeg"
                        width={300}
                        height={500}
                        alt="Me"
                    />
                </div>
                <Intro />
            </div>
            <Image
                src="/me-and-monkey.jpeg"
                width={300}
                height={700}
                alt="A monkey and me in Gibraltar"
            />
            <Image
                src="/mini-persimmon.jpeg"
                width={200}
                height={500}
                alt="Mini persimmon-looking plant"
            />
        </>
    );
}