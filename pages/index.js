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
      <Head>
        <title>abs3nt.eth dev page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="I am abs3nt" />
        <p>

        <img src="/twitter.svg" alt="Twitter Logo" height="10px" margin="5px"/>
          <a href="https://twitter.com/abs3ntdev"> twitter</a><br/>
        <img src="/discord.svg" alt="Discord Logo" height="10px" margin="5px" />
          <a href="https://discord.com/users/870047037930995722"> discord</a><br/>
        <img src="/github.svg" alt="Github Logo" height="10px" margin="5px"/>
          <a href="https://github.com/jjohnstondev"> github</a><br/>
        <img src="/eth.svg" alt="Eth logo" height="10px" margin="5px"/>
          <a href = "https://etherscan.io/address/0xe4306ad21a29f9edcfa9fa584e379a8d0d1463bb"> eth</a><br/>

        </p>
       
      </main>

      <Footer />
    </div>
  )
}
