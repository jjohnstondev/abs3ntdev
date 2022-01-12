import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

/*
.logo {
  height: 1em;
  margin: 5px;
}
*/

export default function Home() {
  return (
    <div className="container">
      <img src="background.png" style={{width: "100%", height: "auto"}}/>
      <Head>
        <title>abs3nt.eth dev page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="I am abs3nt" />
        <p>

        <img src="/twitter.svg" alt="Twitter Logo" height="25px" margin="5px"/>
          <a href="https://twitter.com/abs3ntdev" target="_blank">twitter</a><br/>
        <img src="/discord.svg" alt="Discord Logo" height="25px" margin="5px" />
          <a href="https://discord.com/users/870047037930995722" target="_blank">discord</a><br/>
        <img src="/github.svg" alt="Github Logo" height="25px" margin="5px"/>
          <a href="https://github.com/jjohnstondev" target="_blank">github</a><br/>
        <img src="/os.svg" alt="Eth logo" height="25px" margin="5px"/>
          <a href = "https://opensea.io/abs3nt_eth" target="_blank">opensea</a><br/>

        </p>
       
      </main>

      <Footer />
    </div>
  )
}
