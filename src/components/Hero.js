import React from "react";
import { Link } from "react-router-dom"; // If you are using React Router for navigation

const Hero = () => {
  // You can replace this URL with the actual image URL for your hero section
  const backgroundImageUrl =
    "https://3.bp.blogspot.com/-8PbPNY6M4Bc/WUgIbiZhCVI/AAAAAAAAAKU/ntEeOSjm4UMwjxuQ9VZgNzmnxc3aFal1gCLcBGAs/s1600/How-to-save-money-while-shopping-online-4-2-iloveimg-compressed.jpg";

  return (
    <div
      className=" w-full bg-cover flex flex-col justify-center h-screen items-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="flex gap-4 relative top-64 lg:left-[-29rem]">
      <Link to={'/Login'}>
        <a
          href="#_"
          class="relative px-10 py-3 font-medium text-white transition duration-300 bg-red-400 rounded-md hover:bg-red-700 ease"
          >
          <span class="absolute bottom-0 left-0 h-full -ml-2">
            <svg
              viewBox="0 0 487 487"
              class="w-auto h-full opacity-100 object-stretch"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path
                d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                fill="#FFF"
                fill-rule="nonzero"
                fill-opacity=".1"
                ></path>
            </svg>
          </span>
          <span class="absolute top-0 right-0 w-12 h-full -mr-3">
            <svg
              viewBox="0 0 487 487"
              class="object-cover w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path
                d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                fill="#FFF"
                fill-rule="nonzero"
                fill-opacity=".1"
              ></path>
            </svg>
          </span>
          <span class="relative">LOGIN</span>
        </a>
        </Link>
        <Link to={'/Signup'}>
        <a
          href="#_"
          class="relative px-10 py-3 font-medium text-white transition duration-300 bg-blue-400 rounded-md hover:bg-blue-700 ease"
          >
          <span class="absolute bottom-0 left-0 h-full -ml-2">
            <svg
              viewBox="0 0 487 487"
              class="w-auto h-full opacity-100 object-stretch"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path
                d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                fill="#FFF"
                fill-rule="nonzero"
                fill-opacity=".1"
                ></path>
            </svg>
          </span>
          <span class="absolute top-0 right-0 w-12 h-full -mr-3">
            <svg
              viewBox="0 0 487 487"
              class="object-cover w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path
                d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                fill="#FFF"
                fill-rule="nonzero"
                fill-opacity=".1"
                ></path>
            </svg>
          </span>
          <span class="relative">SignUp</span>
        </a>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
