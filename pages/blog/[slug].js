import Head from "next/head";
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";

//import { Form } from "../components/Form";
const Post = ({ blog }) => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />

        <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport"
        />

        <title>{blog.title}</title>

        <meta property="og:title" content=" frontend developer | Blog" />

        <meta property="og:locale" content="en_US" />

        <link rel="canonical" href="//post" />

        <meta property="og:url" content="//post" />

        <meta
          name="description"
          content="Hello! This is a web developer Portfolio website made using React, Next Js, Tailwind css and Sanity as backend."
        />

        <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

        <meta property="og:site_name" content="Developer Portfolio" />

        <meta property="og:image" content="//assets/img/social.jpg" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:site" content="@tailwindnextjsmade" />

        <link
          crossorigin="crossorigin"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />

        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="preload"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />

        <link
          crossorigin="anonymous"
          href="/assets/styles/main.min.css"
          media="screen"
          rel="stylesheet"
        />
      </Head>

      <div className="w-full hidden md:block z-50 top-0 py-3  sm:py-5  bg-black  ">
        <div className="container flex items-center justify-between">
          <div></div>
          <div className="">
            <ul className="flex items-center">
              <li className="group pl-6">
                <a href="#about">
                  <span className=" font-thin cursor-pointer pt-0.5 font-header  uppercase text-white ">
                    About
                  </span>
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <a href="#portfolio">
                  <span className="cursor-pointer pt-0.5 font-header font-thin uppercase text-white">
                    Portfolio
                  </span>
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <a href="#blog">
                  <span className="cursor-pointer pt-0.5 font-header font-thin uppercase text-white">
                    Blog
                  </span>
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div className="container py-6 md:py-10">
          <div className="mx-auto max-w-4xl">
            <div className="">
              <div className="flex items-center pt-5 md:pt-10">
                <div>
                  <img
                    src="/assets/img/blogg.jpg"
                    className=" h-16  rounded-full border-2 border-grey-70 shadow"
                    alt="author image"
                  />
                </div>
                <div className="pl-5">
                  <span className="block font-body text-xl font-bold text-grey-10">
                    By Soni Kumari
                  </span>
                  <span className="block pt-1 font-body text-xl font-bold text-grey-30">
                    {blog.createdat}
                  </span>
                </div>
              </div>
              <h1 className="pt-5 font-serif text-xl   text-black sm:text-2xl l xl:text-3xl">
                {blog.metadesc}
              </h1>
            </div>
            <div className="prose max-w-none pt-8">
              <PortableText
                projectId="1vq5li0u"
                dataset="production"
                content={blog.content}
                serializers={{
                  h1: (props) => <h1 style={{ color: "green" }} {...props} />,
                  li: ({ children }) => (
                    <li className="special-list-item">{children}</li>
                  ),
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" absolute w-full bottom-0 bg-green-900">
        <div className="container flex flex-col justify-between py-6 sm:flex-row">
          <p className="text-center font-body text-gray-300 md:text-left">
            © Copyright 2022. All right reserved.
          </p>
          <div className="flex items-center text-gray-400 justify-center pt-5 sm:justify-start sm:pt-0">
            codewithsony@gmail
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  const client = createClient({
    projectId: "1vq5li0u",
    dataset: "production",
    useCdn: false,
  });
  const query = `*[_type == "blog" && slug.current == '${slug}'][0]`;
  const blog = await client.fetch(query);

  return {
    props: {
      blog,
    },
  };
};
