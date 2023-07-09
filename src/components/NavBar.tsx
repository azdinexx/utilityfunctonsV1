import Link from 'next/link';
function NavBar() {
  return (
    <div className='p-6  flex items-baseline '>
      <div className='font-extrabold text-2xl mr-auto'>
        <Link href='/'>UFunc</Link>
      </div>

      <Link href='/login'>
        <div
          className='
      bg-black text-white px-6 flex leading-9 rounded-full cursor-pointer
      hover:bg-blue-400 hover:text-white
      '
        >
          Sign In
        </div>
      </Link>
    </div>
  );
}

export default NavBar;
