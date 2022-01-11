import styles from './Footer.module.css'
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Link href = "https://twitter.com/abs3ntdev">
          abs3ntdev<img src="/twitter.svg" alt="Twitter Logo" className={styles.logo} />
        </Link>
        abs3nt.eth#7465 <img src="/discord.svg" alt="Discord Logo" className={styles.logo} />
        <Link href = "https://github.com/jjohnstondev">
          jjohnstondev <img src="/github.svg" alt="Github Logo" className={styles.logo} />
        </Link>
      </footer>
    </>
  )
}
