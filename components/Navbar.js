import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="w-full z-50 top-0 opacity-80 sm:py-4  px-3 bg-black">
        <div className="container flex items-center  justify-between">
          <div></div>
          <div className=" lg:block">
            <ul className="flex items-center">
              <li className="group pl-6">
                <a
                  href="/#about"
                  className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                >
                  About
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <a
                  href="/#portfolio"
                  className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Portfolio
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <a
                  href="/#blog"
                  className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Blog
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
