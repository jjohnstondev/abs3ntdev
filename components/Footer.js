import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        abs3ntdev <img src="/twitter.svg" alt="Twitter Logo" className={styles.logo} />
        abs3nt.eth#7465 <img src="/discord.svg" alt="Discord Logo" className={styles.logo} />
        jjohnstondev <img src="/github.svg" alt="Github Logo" className={styles.logo} />
      </footer>
    </>
  )
}
