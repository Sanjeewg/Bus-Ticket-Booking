import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <div className="bg-blue-200 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5">
          <p className="text-gray-800 font-bold text-3xl pb-6">
            Bus <span className="text-blue-600">booking</span>
          </p>
          <div className="flex gap-6 pb-5">
            <Link href="https://www.instagram.com" target="_blank">
              <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
            </Link>
            <Link href="https://www.twitter.com" target="_blank">
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
            </Link>
            <Link href="https://www.linkedin.com" target="_blank">
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
            </Link>
            <Link href="https://www.facebook.com" target="_blank">
              <FaFacebook className="text-2xl cursor-pointer hover:text-red-600" />
            </Link>
          </div>
        </div>

        <div className="p-5">
          <div className="pb-4">
            <Link href="/home">
              <p className="text-gray-800 font-bold text-2xl pb-4">Home</p>
            </Link>
            <Link href="/about">
              <p className="text-gray-800 font-bold text-2xl pb-4">About</p>
            </Link>
            <Link href="/contact">
              <p className="text-gray-800 font-bold text-2xl pb-4">Contact</p>
            </Link>
            <Link href="/blog">
              <p className="text-gray-800 font-bold text-2xl pb-4">Blog</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center p-5 bg-gray-50">
        <h1 className="text-gray-800 font-semibold">
          2023-2025 All rights reserved / Build by Changed
        </h1>
        <span className="hover:text-blue-600 font-semibold cursor-pointer">
          Changed
        </span>
      </div>
    </>
  );
}

export default Footer;
