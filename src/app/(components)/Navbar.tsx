import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeProvider from './ThemeProvider';
import Button from './Button';

function Navbar() {
  return (
    <>
      <div className="flex flex-row gap-5 bg-red-500 py-4 px-2 ">
        <div>Image</div>
        <div className='flex flex-row '>
          <div>
            <Link href="/">Home</Link>
          </div>
          <div>
            <Link href="/about">About</Link>
          </div>
          <div>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <Link href="/blog">Blog</Link>
          </div>
        </div>
        <div className='flex flex-row '>
          <div>
            <ThemeProvider/>
          </div>
          <div>
            <Button/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
// items-center justify-center
