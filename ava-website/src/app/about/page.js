import Image from 'next/image';

const Intro = () => {
    return(
        <p>Hi, I'm Rebecca. I'm a frontend developer with excitement for all things visually intriguing.
            <br />I love simple things in life - 
            <br />  calm mornings,
            <br />  when lights turn off in the theater,
            <br />  browsing in grocery stores,
            <br />  and when chopped garlic sizzles in oil.
            <br />In 2025 I promised myself that I will create more and consume less.
        </p>
    )
}

export default function About() {
    return (
        <>
            <Intro />
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