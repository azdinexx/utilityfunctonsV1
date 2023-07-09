'use client';
import CodeEditor from '@/components/CodeEditor';
import AddTags from '../../components/AddTags';
import Image from 'next/image';
import { useState } from 'react';
function Page() {
  const [code, setCode] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);

  const generateRequest = () => {
    let data = {
      code: code,
      tags: tags,
      description: 'test',
      title: 'test',
      language: 'python',
    };
  };
  return (
    <main>
      <div className='max-w-full md:max-w-[40rem] md:mx-auto m-4  bg-white min-h-[30rem] rounded-md border border-gray-300 shadow-lg '>
        <div className='max-w-full bg-gray-200 rounded-t-md p-2  shadow- border-b border-gray-300 flex items-center text-lg gap-2 text-gray-500'>
          <Image
            src='/def.jpg'
            alt=''
            width={45}
            height={45}
            style={{
              borderRadius: '50%',
              border: '2px solid white',
            }}
          />
          <div className='flex flex-col mr-auto'>
            <span className='text-gray-600 '>Azz-eddine Bouali</span>
            <span className='text-xs '>Frontend Developer</span>
          </div>
          <button
            className='px-4 py-1 mr-2 bg-blue-500 text-white rounded'
            onClick={generateRequest}
          >
            Publish
          </button>
        </div>
        <div className='p-2'>
          <textarea
            name=''
            id=''
            cols={30}
            className='w-full  p-2
            h-10 focus:ring-0 focus-visible:outline-none
            '
            placeholder='Describe your Utility function'
            style={{ resize: 'none' }}
          ></textarea>
          <CodeEditor height='20rem' code={code} setCode={setCode} />
          <AddTags tagsArr={tags} setTagsArr={setTags} />
        </div>
      </div>
    </main>
  );
}

export default Page;
