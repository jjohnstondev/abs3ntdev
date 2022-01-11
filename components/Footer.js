import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/twitter.svg" alt="Twitter Logo" className={styles.logo}/>
          <a href="https://twitter.com/abs3ntdev" target="_blank">twitter</a><br/>
        <img src="/discord.svg" alt="Discord Logo" className={styles.logo}/>
          <a href="https://discord.com/users/870047037930995722" target="_blank">discord</a><br/>
        <img src="/github.svg" alt="Github Logo" className={styles.logo}/>
          <a href="https://github.com/jjohnstondev" target="_blank">github</a><br/>
        <img src="/os.svg" alt="Eth logo" className={styles.logo}/>
          <a href = "https://opensea.io/abs3nt_eth" target="_blank">opensea</a><br/>
        
      </footer>
    </>
  )
}
