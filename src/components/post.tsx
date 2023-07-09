import React from 'react';
import Image from 'next/image';

interface post {
  id: Number;
  name: String;
  profile: string;
  content: String;
}

function Post({ name, profile, content }: post) {
  return (
    <div className='p-4 border rounded relative'>
      <div className='absolute right-6 top-4 px-4 py-1 bg-slate-200 rounded-full text-zinc-600 hover:text-zinc-900 hover:bg-slate-300 cursor-pointer'>
        copy
      </div>
      <div className='flex items-center'>
        <Image
          src='/../public/def.jpg'
          alt='profile'
          className='w-10 h-10 rounded-full'
          width={40}
          height={40}
        />
        <div className='ml-2'>
          <div className='text-sm font-semibold'>{name}</div>
          <div className='text-xs text-gray-500'>@{name}</div>
        </div>
      </div>
      <div className='mt-2'>{content}</div>

      <ul className='flex  gap-2 mt-2'>
        <li className='px-3 border rounded-full text-zinc-600 text-sm'>tech</li>
        <li
          className='px-3 border rounded-full  text-zinc-600
        text-sm
        '
        >
          formating
        </li>
        <li className='px-3 border rounded-full text-zinc-600 text-sm'>
          killing
        </li>
      </ul>
    </div>
  );
}

export default Post;
