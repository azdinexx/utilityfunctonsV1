'use client';

import { useState, useEffect, useRef } from 'react';
const regex = /\b\w+\b/;
interface Props {
  tagsArr: string[];
  setTagsArr: Function;
}
function AddTags({ tagsArr, setTagsArr }: Props) {
  const [numTags, setnumTags] = useState<number>(0);
  const [tag, setTag] = useState<string>('');

  const addTagso = () => {
    if (tag.match(regex) && !tagsArr.includes(tag) && tagsArr.length < 5)
      setTagsArr((prev: string[]) => [...prev, tag]);
    setTag('');
    setnumTags((prev) => prev + 1);
  };
  const handleKeyPress = (event: KeyboardEvent) => {
    // Handle the keypress event
    if (event.key === 'Enter' || event.key === ',') {
      addTagso();
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts

    document
      .getElementById('input-tags')
      ?.addEventListener('keypress', handleKeyPress);

    // Remove event listener when the component unmounts
    return () => {
      document
        .getElementById('input-tags')
        ?.removeEventListener('keypress', handleKeyPress);
    };
  });

  return (
    <>
      <div className='flex flex-wrap py-2 gap-1'>
        {tagsArr.map((tag, i) => (
          <span
            className='bg-gray-200 rounded-full px-2 py-1 text-xs mr-2 flex text-gray-600 items-center gap-1 group
          cursor-pointer border border-gray-300 hover:bg-gray-300
          '
            key={i}
            onClick={() => {
              setTagsArr((prev: string[]) => prev.filter((t) => t !== tag));
              setnumTags((prev) => prev - 1);
            }}
          >
            {tag}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='currentColor'
              className=' group-hover:text-gray-900'
            >
              <path
                fill='currentColor'
                d='M21 20c0 .55-.45 1-1 1h-1v-2h2v1m-6 1v-2h2v2h-2m-4 0v-2h2v2h-2m-4 0v-2h2v2H7m-3 0c-.55 0-1-.45-1-1v-1h2v2H4m-1-6h2v2H3v-2m18 0v2h-2v-2h2m-6.41-7L12 10.59L9.41 8L8 9.41L10.59 12L8 14.59L9.41 16L12 13.41L14.59 16L16 14.59L13.41 12L16 9.41L14.59 8M3 11h2v2H3v-2m18 0v2h-2v-2h2M3 7h2v2H3V7m18 0v2h-2V7h2M4 3h1v2H3V4c0-.55.45-1 1-1m16 0c.55 0 1 .45 1 1v1h-2V3h1m-5 2V3h2v2h-2m-4 0V3h2v2h-2M7 5V3h2v2H7Z'
              />
            </svg>
          </span>
        ))}

        {numTags < 5 && (
          <input
            name='tags'
            id='input-tags'
            className='   px-2
             focus:ring-0 focus-visible:outline-none 
            '
            placeholder='write a tag and press enter. . . '
            style={{ resize: 'none' }}
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          ></input>
        )}
      </div>
      {/*tags instruction*/}
      {numTags === 0 && (
        <div className='flex  justify-center'>
          <span className='text-xs text-slate-600'>
            * You can add up to 5 tags
          </span>
        </div>
      )}
    </>
  );
}

export default AddTags;
