import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
  return (
    <>
      <div className="flex flex-row gap-5 bg-red-500 py-4 px-2 ">
        <div></div>
        <div>
          <div>
            {' '}
            <Link href="/about">about</Link>
          </div>
          <div>
            {' '}
            <Link href="/contact">contact</Link>
          </div>
          <div>
            {' '}
            <Link href="/blog">blog</Link>
          </div>
        </div>
        <div>
          <div>
            <button>dark</button>
          </div>
          <div>
            <button>login</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
// items-center justify-center
