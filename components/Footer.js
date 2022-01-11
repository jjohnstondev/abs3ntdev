import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/twitter.svg" alt="Twitter Logo" height="25px" margin="5px"/>
          <a href="https://twitter.com/abs3ntdev" target="_blank">twitter</a><br/>
        <img src="/discord.svg" alt="Discord Logo" height="25px" margin="5px" />
          <a href="https://discord.com/users/870047037930995722" target="_blank">discord</a><br/>
        <img src="/github.svg" alt="Github Logo" height="25px" margin="5px"/>
          <a href="https://github.com/jjohnstondev" target="_blank">github</a><br/>
        <img src="/os.svg" alt="Eth logo" height="25px" margin="5px"/>
          <a href = "https://opensea.io/abs3nt_eth" target="_blank">opensea</a><br/>
        <a href="https://twitter.com/abs3ntdev"> abs3ntdev</a>
        
      </footer>
    </>
  )
}
