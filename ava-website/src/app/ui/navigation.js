import Link from 'next/link';
import Logo from '@/app/ui/logo';
import styles from '@/app/styles/navigation.module.css';


const links = [
    {
        name: "About",
        href: "about",
    },
    {
        name: "Work",
        href: "work"
    },
    {
        name: "Fun",
        href: "fun"
    }
]

export default function Navigation() {
    return(
        <div className="flex mb-5">
            <Logo />
            <div className={`flex ${styles.navigation}`}>
                {links.map(link => (
                    <Link
                        className={styles.menu}
                        key={link.name}
                        href={link.href}
                    >
                        <p>{link.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}