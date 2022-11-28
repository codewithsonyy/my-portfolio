import React from "react";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import Navbar from "../components/Navbar";

const Blogs = ({ blogs }) => {
  const client = createClient({
    projectId: "1vq5li0u",
    dataset: "production",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);

  return (
    <div>
      <div>
        <div className="hidden md:block">
          <Navbar />
        </div>

        <div className="bg-grey-50" id="blog">
          <div className="container mx-auto sm:mx-8 ">
            <h4 className="pt-6 text-center font-Pacifico text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              my posts
            </h4>
            <div className="mx-auto   flex flex-col w-full   pt-12 pb-8 sm:w-3/4  lg:ml-4 lg:w-3/5 ">
              {blogs.map((item) => {
                return (
                  <Link
                    key={item.slug.current}
                    href={"/blog/" + item.slug.current}
                    className="shadow"
                  >
                    <div>
                      <div
                      //   style={{
                      //     backgroundImage: `url(${
                      //       builder.image(item.blogimage).width(200).url() ||
                      //       `/assets/img/post-01.png`
                      //     })`,
                      //   }}
                      // className="group relative h-32 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
                      >
                        {/* <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span> */}
                      </div>
                      <div className="bg-gray-100 md:cursor-pointer  shadow-lg rounded-md py-3 px-4 mx-4 mb-4 ">
                        <span className="block font-body text-lg font-semibold text-black">
                          {item.title}
                        </span>
                        <span className="block  pt-2 font-body text-grey-20">
                          {item.metadesc}
                        </span>
                        <span className="  w-1/2  mt-3  block md:hidden  lg:w-40 lg:-right-10 rounded-full border-2  px-6 py-2 text-center font-body text-sm font-bold uppercase  md:text-base text-white border-solid bg-emerald-700 hover:bg-green-700 cursor-pointer">
                          Read More
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "1vq5li0u",
    dataset: "production",
    useCdn: false,
  });
  const query = `*[_type == "blog"]`;
  const blogs = await client.fetch(query);

  return {
    props: {
      blogs,
    },
  };
}
