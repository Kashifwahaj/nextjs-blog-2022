import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Blog App</title>
        <meta name="description" content="A Blog App for 2022 Users" />
        <meta name="keywords" content="Blog App, 2022 Blog App" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Script src="/script.js" strategy="lazyOnload"></Script>
  
      <main className="container mx-auto justify-center flex flex-col  items-center space-4">
        <h1 className="text-5xl font-bold my-5">
          Blog 2022
        </h1>
        <div className="rounded-xl bg-gray-200 p-0.5 shadow-xl">
        {/* <Image src="/images/homeimg.jpeg" alt="Vercel Logo" className=" rounded-xl"   width={400} height={400} /> */}
        <img src="/images/homeimg.jpeg" alt="Vercel Logo" className=" rounded-xl"   width={400} height={400} />
        </div>
      </main>
    </div>
  )
}

export default Home
