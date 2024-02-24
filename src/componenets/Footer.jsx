import React from "react";
import { Link } from "react-router-dom";

import logo from "../../public/favicon.png";

function Footer() {
  return (
    <footer className=" bg-[#232a34] text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="" className="flex items-center">
              <img
                src={logo}
                className="h-24 me-3"
                alt="Logo"
              />
              <span className="self-center text-xl text-center relative -left-5 leading-6 font-semibold whitespace-nowrap dark:text-white">
                EMİR
                <br />
                OTOMAT
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 md:gap-6 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase ">
                Kurumsal
              </h2>
              <ul className="  font-medium">
                <li className="mb-4">
                  <Link to="about" className="hover:underline">
                    Hakkımızda
                  </Link>
                </li>
                <li className="mb-4">
                <Link to="contactus" className="hover:underline">
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase ">Üretim</h2>
              <ul className="  font-medium">
                <li className="mb-4">
                  <a
                    href=""
                    className="hover:underline "
                  >
                    Çalışmalarımız
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href=""
                    className="hover:underline"
                  >
                    Deneyimlerimiz
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href=""
                    className="hover:underline"
                  >
                    Kalitemiz
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm  sm:text-center ">
            © 2024{" "}
            <a
              href="https://emircncotomat.com/"
              className="hover:underline"
            >
              EMİR OTOMAT CNC
            </a>
            . Tüm Hakları Saklıdır.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://www.linkedin.com/company/emirotomatcnc/"
              className=" hover:dark:hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 48 48"
              >
                <path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 z M 15.5 13 A 2.5 2.5 0 0 0 15.5 18 A 2.5 2.5 0 0 0 15.5 13 z M 14 20 C 13.447 20 13 20.447 13 21 L 13 34 C 13 34.553 13.447 35 14 35 L 17 35 C 17.553 35 18 34.553 18 34 L 18 21 C 18 20.447 17.553 20 17 20 L 14 20 z M 21 20 C 20.447 20 20 20.447 20 21 L 20 34 C 20 34.553 20.447 35 21 35 L 24 35 C 24.553 35 25 34.553 25 34 L 25 26.5 C 25 25.121 26.121 24 27.5 24 C 28.879 24 30 25.121 30 26.5 L 30 34 C 30 34.553 30.447 35 31 35 L 34 35 C 34.553 35 35 34.553 35 34 L 35 26 C 35 22.691 32.309 20 29 20 C 27.462 20 26.063 20.586016 25 21.541016 L 25 21 C 25 20.447 24.553 20 24 20 L 21 20 z"></path>
              </svg>
              <span className="sr-only">LinkedIn page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
