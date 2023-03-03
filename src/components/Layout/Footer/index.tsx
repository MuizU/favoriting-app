import Image from 'next/image';
import Link from 'next/link';
import style from './styles.module.sass'
export default function Footer() {
    return (
      <div
        className={style.footer}
        style={{ position: "absolute", bottom: 0, width: "100%" }}
      >
        <nav>
          <ul>
            <li>
              <Link href="/">
              <Image width={24} height={24} src="/icons/home-filled-white.png" alt="" />
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/favorites">
              <Image width={24} height={24} src="/icons/heart-filled-white.png" alt="" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
}