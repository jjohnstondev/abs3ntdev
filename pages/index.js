import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>abs3nt dev page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Header title="abs3nt"/>
        <p>
        <a href="https://twitter.com/abs3ntdev" target="_blank">twitter</a><br/>
        <a href="https://discord.com/users/870047037930995722" target="_blank">discord</a><br/>
        <a href="https://github.com/jjohnstondev" target="_blank">github</a><br/>
        <a href = "https://opensea.io/abs3nt_eth" target="_blank">opensea</a><br/>
        <a href = "https://anilist.co/user/abs3nt" target = "_blank">anilist</a><br/>
        </p>
      </main>
    </div>
  )
}
