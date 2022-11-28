import Head from "next/head";
import { createClient } from "next-sanity";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home({ blogs, profile }) {
  const [mobilemenu, setMobilemenu] = useState(false);
  useEffect(() => {
    const headerNavbar = document.getElementById("navbar");
    const heroSection = document.getElementById("hero");
    const obs = new IntersectionObserver(
      function (entries) {
        const ent = entries[0];
        console.log(ent);

        if (ent.isIntersecting === false) {
          headerNavbar.classList.add("lg:sticky");
          headerNavbar.classList.remove("hidden");
        }

        if (ent.isIntersecting === true) {
          headerNavbar.classList.remove("lg:sticky");
          headerNavbar.classList.add("hidden");
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "0px",
      }
    );
    obs.observe(heroSection);
  });

  return (
    <div>
      <script src="/assets/js/main.js"></script>
      <Head>
        <meta charset="utf-8" />

        <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport"
        />

        <title>{profile.title} - Frontend Developer</title>
        <meta property="og:title" content="Homepage | Portfolio Website" />

        <meta property="og:locale" content="en_US" />

        <link rel="canonical" href="//" />
        <meta property="og:url" content="//" />
        <meta
          name="description"
          content="Hello! This is a web developer Portfolio website made using React, Next Js, Tailwind css and Sanity as backend."
        />

        <link rel="icon" type="image/png" href="/assets/img/favicon.png" />
        <meta name="theme-color" content="#0E9F6E" />

        <meta property="og:site_name" content="React Portfolio" />

        <meta property="og:image" content="//assets/img/bgportls.jpg" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:site" content="@tailwindReactmade" />

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
      <div id="main">
        <div className=" hidden z-50 top-0" id="navbar">
          <Navbar />
        </div>
        <div id="hero">
          <div className="w-full z-50 top-0 py-3  sm:py-5  bg-black  ">
            <div className="container flex items-center justify-between">
              <div><a href='/assets/img/resume.pdf' className="  text-2xl text-emerald-400 font-Pacifico" download>Resume</a>
                
              </div>
              <div className="hidden lg:block">
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
              <div className=" block lg:hidden">
                <button onClick={() => setMobilemenu(!mobilemenu)}>
                  <i className="bx bx-menu text-4xl text-white"></i>
                </button>
              </div>
            </div>
          </div>

          <div
            className={` fixed inset-0 z-50 min-h-screen bg-black bg-opacity-70    ${
              mobilemenu ? "block" : "hidden"
            }`}
          >
            <div className="absolute  right-0 min-h-screen w-2/3 bg-emerald-600  py-4 px-8 shadow md:w-1/3">
              <button
                onClick={() => setMobilemenu(!mobilemenu)}
                className="absolute top-0 right-0 mt-4 mr-4"
              >
                <img
                  src="/assets/img/icon-close.svg"
                  className="h-10 w-auto"
                  alt=""
                />
              </button>

              <ul
                onClick={() => setMobilemenu(!mobilemenu)}
                className="mt-8 flex flex-col "
              >
                <li className="py-2">
                  <a href="#about">
                    <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                      About
                    </span>
                  </a>
                </li>
                <li className="py-2">
                  <a href="#portfolio">
                    <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                      Portfolio
                    </span>
                  </a>
                </li>

                <li className="py-2">
                  <a href="#blog">
                    <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                      Blog
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div
              className="relative bg-cover h-screen bg-center bg-no-repeat py-8"
              style={{ backgroundImage: "url(/assets/img/bgportls.jpg)" }}
            >
              <div className="absolute inset-0 z-20 h-screen   bg-center bg-no-repeat opacity-80 bg-gradient-to-b from-black "></div>

              <div className=" relative container  z-30 md:pt-20 pt-5 pb-12   lg:pt-64 lg:pb-48">
                <div className=" md:absolute top-4 left-52  gap-10 ">
                  <div className="p-12 sm:pt-10 lg:pl-8 lg:pt-0  opacity-70 ">
                    <h6 className="text-center rounded-md mb-3  text-white  lg:text-left sm:text-xl  md:pt-8">
                      Hello Everyone! I'm
                    </h6>
                    <div className=" bg-black ">
                      <h1 className="text-center md:pl-2 font-thin text-2xl text-white lg:text-left sm:text-4xl  md:tracking-widest">
                        {profile.name}
                      </h1>
                    </div>

                    <div className="flex flex-col justify-center pt-1 md:inline-block lg:text-left ">
                      <p className="font-body sm:text-4xl text-2xl  text-center uppercase bg-black text-white">
                        A FRONTEND DEV
                      </p>

                      <div className="flex items-center justify-center mt-3 bg-black md:py-1 md:pl-2 lg:justify-start ">
                        <div className="">
                          <i className="bx bx-chevron-right text-3xl text-green-400"></i>
                        </div>
                        <a href={profile.gitUrl} className="pl-4">
                          <i className="bx bxl-github text-2xl text-white hover:text-yellow"></i>
                        </a>
                        <a href={profile.linkedtUrl} className="pl-4">
                          <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
                        </a>
                      </div>
                      <div className="text-center lg:text-left ">
                        <h1 className="text-xl mt-5  text-white sm:text-xl ">
                          Tech Stack
                        </h1>
                        <ul className="text-emerald-200 mt-4 sm:grid lg:mt-2 sm:grid-cols-3 gap-3">
                          <li>HTML CSS</li>
                          <li>JAVASCRIPT</li>
                          <li>TAILWIND CSS</li>
                          <li>REACTJS</li>
                          <li>SANITY IO</li>
                        </ul>
                      </div>
                      <button className="bg-emerald-400 hover:bg-emerald-600 mt-3 bg-gradient-to-b w-1/2 text-white text-center mx-auto from-black py-2 rounded-md hover:bg-gradient-to-t hover:text-sm  px-2">
                        <a href="/blogs">All blogs</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 py-12" id="about">
          <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
            <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
              <h2 className="font-header text-black text-3xl font-semibold uppercase  lg:text-6xl">
                ABOUT ME
              </h2>
              <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                I'm a Web Developer
              </h4>
              <p className="pt-6 font-body leading-relaxed text-grey-20">
                {profile.myBio}
              </p>
              <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
                <div className="flex items-center justify-center sm:justify-start">
                  <p className="font-body text-lg font-semibold uppercase text-grey-20">
                    Connect with me
                  </p>
                  <div className="hidden sm:block">
                    <i className="bx bx-chevron-right text-2xl text-black"></i>
                  </div>
                </div>

                <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                  <a href={profile.gitUrl} className="pl-4">
                    <i className="bx bxl-github text-2xl text-black hover:text-green-400"></i>
                  </a>
                  <a href={profile.linkedtUrl} className="pl-4">
                    <i className="bx bxl-linkedin text-2xl text-black hover:text-green-400"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full  pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
              <div className="pt-6">
                {" "}
                <div className=" md:border-4 border-2 border-emerald-400 ">
                  <img
                    src="/assets/img/udemyjavascript.jpg"
                    className="h-48 w-full sm:h-80"
                    alt="author"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-16 mt-12 md:py-20" id="portfolio">
          <h2 className="font-Pacifico text-black text-xl uppercase text-center tracking-wider lg:text-xl">
            my portfolio
          </h2>

          <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
            <a
              href={profile.omnifoodUrl}
              className="mx-auto transform transition-all hover:scale-105 md:mx-0"
            >
              <img
                src="/assets/img/omni.png"
                className="w-full shadow"
                alt="portfolio image"
              />
            </a>
            <a
              href={profile.textutilsUrl}
              className="mx-auto transform transition-all hover:scale-105 md:mx-0"
            >
              <img
                src="/assets/img/textu.png"
                className="w-full shadow"
                alt="portfolio image"
              />
            </a>
            <a
              href="/"
              className="mx-auto transform transition-all hover:scale-105 md:mx-0"
            >
              <img
                src="/assets/img/portfolio.png"
                className="w-full shadow"
                alt="portfolio image"
              />
            </a>
            <a
              href={profile.stimerUrl}
              className="mx-auto transform transition-all hover:scale-105 md:mx-0"
            >
              <img
                src="/assets/img/stimeron.png"
                className="w-full shadow"
                alt="portfolio image"
              />
            </a>
          </div>
        </div>

        <div className=" " id="blog">
          <div className="container py-16 md:py-20">
            <h2 className="font-Pacifico text-black text-xl uppercase text-center tracking-wider  lg:text-xl">
              my recent post
            </h2>
            <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
              {blogs.map((item) => {
                return (
                  <Link
                    key={item.slug.current}
                    href={"/blog/" + item.slug.current}
                    className="shadow"
                  >
                    <div>
                      <div
                        // style={{
                        //   backgroundImage: `url(${
                        //     builder.image(item.blogimage).width(200).url() ||
                        //     `/assets/img/post-01.png`
                        //   })`,
                        // }}
                        className="group   "
                      ></div>
                      <div className="bg-slate-100  py-6 px-5 xl:py-8">
                        <span className="block font-body text-lg font-semibold text-black">
                          {item.title}
                        </span>
                        <span className="block pt-2 font-body text-grey-20">
                          {item.metadesc}
                        </span>
                        <span className="  w-1/2  mt-3  block   lg:w-40 lg:-right-10 rounded-full border-2  px-6 py-2 text-center font-body text-sm font-bold uppercase  md:text-base text-black border-solid bg-emerald-300 hover:bg-emerald-200 cursor-pointer">
                          Read More
                        </span>
                        {/* <span className=" mr-4 mt-4 block rounded-full border-2 border-black px-6 py-2 text-center font-body text-sm font-bold uppercase text-white bg-green-700 hover:bg-emerald-600 md:text-base  cursor-pointer">
                          Read More
                        </span> */}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className=" bg-cover bg-center bg-no-repeat bg-gray-900 py-16 bg-blend-multiply lg:py-24">
          <div className="container relative z-30">
            <h3 className="text-center text-lg font-dancing leading-tight tracking-wide text-white ">
              clarity and action!
            </h3>

            <ul className="text-gray-400 text-center mt-10">
              <li className="pl-4">
                <i className="bx bx-envelope text-2xl  mr-3"></i>
              </li>
              <li>codewithsony@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const client = createClient({
    projectId: "1vq5li0u",
    dataset: "production",
    useCdn: false,
  });
  const query = `*[_type == "blog"][0...1]`;
  const blogs = await client.fetch(query);
  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);
  console.log(blogs);
  return {
    props: {
      blogs,
      profile,
    },
  };
}
