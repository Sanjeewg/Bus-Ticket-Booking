import React from 'react';
import Link from 'next/link';

function Button() {
  return (
    <div className="flex flex-row items-center justify-center gap-5 mt-4 ">
      <Link
        className=" px-3 py-1 text-white transition-all rounded-md shadow-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b  "
        href="/login/signin"
      >
        sign In
      </Link>
      <Link
        className=" text-center  px-3 py-1 text-white  bg-gray-700 dark:bg-white dark:text-gray-800 rounded-md shadow-xl hover:bg-gray-900 hover:text-white   "
        href="/login/register"
      >
        Log In
      </Link>
    </div>
  );
}

export default Button;
