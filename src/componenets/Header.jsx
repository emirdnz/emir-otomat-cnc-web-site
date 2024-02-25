import { useState, useEffect } from "react";

import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

import logo from "../../public/logo.png";

function Header() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 660 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-2">
      <Link to="home" className="flex items-center mx-2">
        <Typography
          as="li"
          variant="h6"
          color="blue-gray"
          className="p-1 font-bold font-montserrat transition duration-700 ease-in-out hover:text-primary-blue"
        >
          Anasayfa
        </Typography>
      </Link>
      <Link to="about" className="flex items-center mx-2">
        <Typography
          as="li"
          variant="h6"
          color="blue-gray"
          className="p-1 font-bold font-montserrat transition duration-700 ease-in-out hover:text-primary-blue"
        >
          Hakkımızda
        </Typography>
      </Link>
      <Link to="our-works" className="flex items-center mx-2">
        <Typography
          as="li"
          variant="h6"
          color="blue-gray"
          className="p-1 font-bold font-montserrat transition duration-700 ease-in-out hover:text-primary-blue"
        >
          Çalışmalarımız
        </Typography>
      </Link>
      <Link to="certificates" className="flex items-center mx-2">
        <Typography
          as="li"
          variant="h6"
          color="blue-gray"
          className="p-1 font-bold font-montserrat transition duration-700 ease-in-out hover:text-primary-blue"
        >
          Kalite
        </Typography>
      </Link>
      <Link to="career" className="flex items-center mx-2">
        <Typography
          as="li"
          variant="h6"
          color="blue-gray"
          className="p-1 font-bold font-montserrat transition duration-700 ease-in-out hover:text-primary-blue"
        >
          Kariyer
        </Typography>
      </Link>
      <Link to="contactus" className="flex items-center mx-2">
        <Typography
          as="li"
          variant="h6"
          color="blue-gray"
          className="p-1 font-bold font-montserrat transition duration-700 ease-in-out hover:text-primary-blue"
        >
          İletişim
        </Typography>
      </Link>
    </ul>
  );

  return (
    <>
      <nav className=" border-b-2 border-slate-200 bg-slate-100 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-2 leading-8">
          <div></div>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <div className="flex items-center text-primary-blue">
              <span className="text-sm  text-gray-500 dark:text-white hover:underline">
                <a
                  href="tel:02124711740"
                  className="flex items-center ml-2 transition duration-700 ease-in-out hover:text-primary-blue"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 mr-1 fill-primary-blue"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  <span className="line-clamp-1 min-w-24 md:min-w-24 mr-1">
                    +90 (212) 671 17 40
                  </span>
                </a>
              </span>
              <a
                href="mailto:info@emircncotomat.com"
                className="text-sm  text-gray-500 dark:text-white hover:underline"
              >
                <span className="flex items-center ml-2 line-clamp-1 transition duration-700 ease-in-out hover:text-primary-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#427fda"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-5 h-5 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  <span className="line-clamp-1 text-ellipsis w-24 md:w-full">
                    info@emircncotomat.com
                  </span>
                </span>
              </a>
              <a
                href="https://maps.app.goo.gl/69vrJ4qrDz3UmQ9y6"
                className="text-sm  text-gray-500 dark:text-white hover:underline"
                target="_blank"
              >
                <span className="flex items-center ml-2 line-clamp-1 transition duration-700 ease-in-out hover:text-primary-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 30 30"
                    fill="#427fda"
                    className="w-5 h-5 mr-1"
                  >
                    <path d="M9.8 3.6C6.8 5.2 4 9.7 4 13c0 3.1 1.8 6.1 6 10 2 1.9 4 4.2 4.3 5 .6 1.3.8 1.3 1.4 0 .3-.8 2.3-3.1 4.3-5 6.2-5.8 7.3-9.6 4.5-15S15.1.6 9.8 3.6zm7.7 9.4c0 1.8-.6 2.6-2.3 2.8-1.3.2-2.5-.3-2.8-1.2-1-2.6.4-4.8 2.8-4.4 1.7.2 2.3 1 2.3 2.8z" />
                  </svg>
                  <span className="line-clamp-1 text-ellipsis min-w-16 md:">
                    İkitelli Osb
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-3 py-3">
        <div className="flex items-center max-w-screen-xl mx-auto justify-between text-blue-gray-900">
          <Link
            to="/"
            className="mr-4 cursor-pointer  font-medium flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-16" alt="Logo" />
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>{navList}</Collapse>
      </Navbar>

      {/* <nav
        className={`bg-white dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 `}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-14" alt="Logo" />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav
        className={`bg-white dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ${
          isSticky ? "fixed" : "hidden"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-14" alt="Logo" />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  );
}

export default Header;
