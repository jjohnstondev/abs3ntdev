import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>abs3nt.eth dev page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="I am abs3nt" />
        <p>
        <a href="https://twitter.com/abs3ntdev"> abs3ntdev</a>
        <img src="/twitter.svg" alt="Twitter Logo" className={styles.logo} />
        {/* 

        <a href="https://discord.com/users/870047037930995722"> abs3nt.eth#7465</a>
        <img src="/discord.svg" alt="Discord Logo" className={styles.logo} />
        <a href="https://github.com/jjohnstondev"> jjohnstondev</a>
        <img src="/github.svg" alt="Github Logo" className={styles.logo} />
        <a href = "https://etherscan.io/address/0xe4306ad21a29f9edcfa9fa584e379a8d0d1463bb"> abs3nt.eth </a>
        <img src="/eth.svg" alt="Eth logo" className={styles.logo} />

        */}
        </p>
       
      </main>

      <Footer />
    </div>
  )
}
