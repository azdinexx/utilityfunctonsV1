import data from '../../public/posts.json';
import Post from '../components/post';

import Footer from '../components/Footer.tsx';

function page() {
  return (
    <>
      <div className='min-h-screen p-4'>
        <div
          className='text-6xl font-extrabold
      max-w-2xl mx-auto text-center p-4
      '
        >
          Discover & Share{' '}
          <span className='text-blue-500'>Utility Functions</span>
        </div>
        <div className='text-xl  max-w-4xl mx-auto text-center p-4'>
          <p>
            UFunc is a community-driven platform for discovering and sharing
            utility functions.
          </p>
        </div>
        <div className=' my-8 min-w-full flex justify-center'>
          <input
            type='text'
            placeholder='exemple : format price'
            className='bg-blue-400  focus:placeholder-slate-600
          placeholder-white shadow-lg
        p-2 rounded-full text-white pl-6 mr-4
        focus:outline-none focus:ring-2 focus:ring-blue-500
        focus:bg-white focus:text-black
        '
          />
          <div
            className='bg-black text-white px-4 flex  rounded-full cursor-pointer
        hover:bg-blue-400 hover:text-white
          items-center
        '
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 50 50'
              width='18px'
              height='18px'
              className='mr-2'
            >
              <path
                fill='white'
                d='M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z'
              />
            </svg>
            search
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3  py-5'>
          {data.map((post) => {
            return (
              <Post key={post.id} {...post}>
                hello
              </Post>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
