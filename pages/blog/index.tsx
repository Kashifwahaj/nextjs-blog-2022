import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import { GetServerSideProps } from 'next'
import axios from 'axios'

interface props {
  blogs:any[],
  error?:any,
  message:string
}

const Blog: NextPage<props> = ({blogs,error,message}) => {

  return (
    <div>
      <Head>
        <title>Blog | Blog App</title>
        <meta name="description" content="A Blog App for 2022 Users" />
        <meta name="keywords" content="Blog App, 2022 Blog App" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Script src="/script.js" strategy="lazyOnload"></Script>

      <main className="container mx-auto">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <h2>{message}</h2>
              {blogs && blogs.map((blog:any, index:number) => {
                return (
                  <div key={index} className="p-4 md:w-1/3">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                      <div className="p-6">
                        <Link href={`/blog/${blog.slug}`}>
                        <h1 className="title-font cursor-pointer text-lg font-medium text-gray-900 mb-3">{blog.title}</h1>
                        </Link>
                        <p className="leading-relaxed mb-3">{blog.content}</p>
                        <div className="flex items-center flex-wrap ">
                          <Link href={`blog/post-1`}>
                            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                          </Link>
                          <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>1.2K
                          </span>
                          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>6
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}

            </div>
          </div>
        </section>

      </main>
    </div>
  )
}


export const getStaticProps: GetStaticProps = async (context) => {
  try {

    const response = await axios.get('http://localhost:3000/api/blogs');
    return {
      props: {
        blogs: response.data,
        message: response.data.length + ' Blog Found'
      }
    }

  } catch (error) {
    return {
      props: {
        blogs: [],
        error:JSON.stringify(error),
        message: 'No Blog Found'
      }
    }
  }

}



// export const getServerSideProps: GetServerSideProps = async (context) => {
//   try {

//     const response = await axios.get('http://localhost:3000/api/blogs');
//     return {
//       props: {
//         blogs: response.data,
//         message: response.data.length + ' Blog Found'
//       }
//     }

//   } catch (error) {
//     return {
//       props: {
//         blogs: [],
//         error,
//         message: 'No Blog Found'
//       }
//     }
//   }

// }

export default Blog
