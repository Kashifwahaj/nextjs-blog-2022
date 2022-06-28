import axios from 'axios'
import type { GetServerSideProps, GetStaticPaths, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Script from 'next/script'


interface props {
  blog: any,
  error?: any,
  message: string,
  slug: string
}


const SingleBlog: NextPage<props> = ({ slug, blog, error, message }) => {

  return (
    <div>
      <Head>
        <title>{slug} | Blog App</title>
        <meta name="description" content="A Blog App for 2022 Users" />
        <meta name="keywords" content="Blog App, 2022 Blog App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script src="/script.js" strategy="lazyOnload"></Script>

      <main className="container mx-auto">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{blog.title}</h1>
              <p className="mb-8 leading-relaxed">{blog.content}</p>
              <p>{error}</p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
              </div>
            </div>
          </div>
        </section>
        <Image src="/vercel.svg" alt="Vercel Logo" width={200} height={200} />
      </main>
    </div>
  )
}


// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [
//       { params: {} }
//     ],
//     fallback: true // false or 'blocking'
//   };
// }


export const getServerSideProps: GetServerSideProps = async (context) => {

  const { slug } = context.query;
  try {
    const response = await axios.get('http://localhost:3000/api/getblog?q=' + slug);
    return {
      props: {
        blog: response.data,
        message: ' Blog Found',
        slug
      }
    }
  } catch (error) {
    return {
      props: {
        blog: [],
        error: JSON.stringify(error),
        message: 'No Blog Found',
        slug
      }
    }
  }
}


export default SingleBlog
