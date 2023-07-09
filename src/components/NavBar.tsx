import Link from 'next/link';
function NavBar() {
  return (
    <div className='flex px-4 py-6 items-center'>
      {/*LOGO*/}{' '}
      <Link href='/'>
        <div className='flex gap-2 text-blue-500 items-center text-2xl font-extrabold'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            width='50'
            height='50'
            viewBox='0 0 48 48'
          >
            <circle
              cx='24'
              cy='26'
              r='18'
              fill='none'
              stroke='#64717c'
              strokeMiterlimit='10'
              strokeWidth='4'
            ></circle>
            <linearGradient
              id='NPMp5gryGhBwFijU60RIra_6mvDpjUNQ7OS_gr1'
              x1='20.022'
              x2='28.425'
              y1='5.022'
              y2='13.425'
              gradientUnits='userSpaceOnUse'
            >
              <stop offset='0' stopColor='#33bef0'></stop>
              <stop offset='1' stopColor='#0a85d9'></stop>
            </linearGradient>
            <circle
              cx='24'
              cy='9'
              r='6'
              fill='url(#NPMp5gryGhBwFijU60RIra_6mvDpjUNQ7OS_gr1)'
            ></circle>
            <linearGradient
              id='NPMp5gryGhBwFijU60RIrb_6mvDpjUNQ7OS_gr2'
              x1='36.022'
              x2='44.425'
              y1='30.022'
              y2='38.425'
              gradientUnits='userSpaceOnUse'
            >
              <stop offset='0' stopColor='#33bef0'></stop>
              <stop offset='1' stopColor='#0a85d9'></stop>
            </linearGradient>
            <circle
              cx='40'
              cy='34'
              r='6'
              fill='url(#NPMp5gryGhBwFijU60RIrb_6mvDpjUNQ7OS_gr2)'
            ></circle>
            <linearGradient
              id='NPMp5gryGhBwFijU60RIrc_6mvDpjUNQ7OS_gr3'
              x1='4.022'
              x2='12.425'
              y1='30.022'
              y2='38.425'
              gradientUnits='userSpaceOnUse'
            >
              <stop offset='0' stopColor='#33bef0'></stop>
              <stop offset='1' stopColor='#0a85d9'></stop>
            </linearGradient>
            <circle
              cx='8'
              cy='34'
              r='6'
              fill='url(#NPMp5gryGhBwFijU60RIrc_6mvDpjUNQ7OS_gr3)'
            ></circle>
          </svg>
          <span className=''>Utility Functions</span>
        </div>
      </Link>
      {/*SEARCH BAR*/}
      <div className='md:flex ml-auto gap-2 hidden items-center bg-gray-200 p-1 pl-4 pr-2 rounded text-gray-700 w-full max-w-[40rem]'>
        <input
          type='text'
          placeholder='Search'
          className='bg-gray-200 focus:ring-0 w-full  focus-visible:outline-none'
        />
        <button className='text-gray-500'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z'
            />
          </svg>
        </button>
      </div>
      <div className='px-2 ml-auto flex '>
        <button className='px-2 md:block hidden'>
          <Link href={'new'}>Add New</Link>
        </button>
        <button className='flex items-center border-l pl-3 hover:bg-gray-300 gap-2 relative group'>
          <img src='/def.jpg' alt='' className='w-8 h-8 rounded-full' />
          Azzdine Bouali
        </button>
      </div>
    </div>
  );
}

export default NavBar;
