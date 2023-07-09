import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <div className='text-zinc-500 text-center p-4'>
      Made With&nbsp; &lt;3 &nbsp;By &nbsp;
      <Link
        className='underline text-blue-500'
        href='https://www.github.com/azdinexx'
      >
        @Azdinexx
      </Link>
    </div>
  );
}

export default Footer;
