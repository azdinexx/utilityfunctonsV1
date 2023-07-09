import React from 'react';
import Image from 'next/image';
import CodeDisplayer from './CodeDisplayer';

interface post {
  id: Number;
  name: string;
  profile: string;
  content: string;
  code: string | undefined;
  tags: string[];
}

function Post({ name, profile, content, code, tags }: post) {
  return (
    <div className='p-4 border rounded relative shadow-sm'>
      <div
        className='absolute right-6 top-4 p-2 
      bg-slate-200 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-slate-300 cursor-pointer'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            d='M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1Z'
          />
        </svg>
      </div>
      <div className='flex items-center'>
        <Image
          src={profile}
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
      <div className='m-2 shadow-sm border '>
        <CodeDisplayer height='10rem' code={code} />
      </div>
      <ul className='flex  gap-2 mt-2'>
        {tags.map((tag, i) => {
          return (
            <li
              className='px-3 border rounded-full text-zinc-600 text-sm'
              key={`tag${i}`}
            >
              {tag}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Post;
