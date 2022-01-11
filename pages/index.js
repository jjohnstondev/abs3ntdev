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
        <p className="description">
          Welcome to my page
        </p>
      </main>

      <Footer />
    </div>
  )
}
