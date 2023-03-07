import Image from 'next/image'
import Link from 'next/link'
import style from './styles.module.sass'
export default function Header() {
    return (
        <header>
            <div className={style.header}>
                <div className={style.headerTitle}>
                    <h3>
                        Favoriting App
                    </h3>
                </div>
                <div className={style.headerItems}>
                    <ul>
                        <li>
                            <Link href='/'>
                                <Image width={24} height={24} src="/icons/home-filled-white.png" alt="" />
                                <span>Home</span></Link></li>
                        <li>
                            <Link href='/favorites'>
                                <Image width={24} height={24} src="/icons/heart-filled-white.png" alt="" />
                                <span>Favorites</span></Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )

}