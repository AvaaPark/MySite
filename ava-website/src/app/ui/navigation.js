'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Logo from '@/app/ui/logo';
import styles from '@/app/styles/navigation.module.css';


const links = [
    {
        name: "About",
        href: "/about",
    },
    {
        name: "Work",
        href: "/work"
    },
    {
        name: "Fun",
        href: "/fun"
    }
]

export default function Navigation() {
    const path = usePathname();
    console.log('path: ', path);
    return(
        <div className="flex mb-5">
            <Logo />
            <div className={`flex ${styles.navigation}`}>
                {links.map(link => (
                    <Link
                        className={clsx(styles.menu, {
                            "font-semibold": path === link.href    
                        })}
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