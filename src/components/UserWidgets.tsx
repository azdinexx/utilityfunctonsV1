'use state';

function UserWidgets() {
  return (
    <div className='px-2 ml-auto flex '>
      <button className='px-2 md:block hidden'>Add New</button>
      <button className='flex items-center border-l pl-3 hover:bg-gray-300 gap-2 relative group'>
        <img src='/def.jpg' alt='' className='w-8 h-8 rounded-full' />
        Azzdine Bouali
        <ul
          className=' hidden absolute top-10  flex-col items-start  bg-white shadow-md rounded-md p-2 gap-2 border border-gray-300 w-32  z-10  group-hover:flex
        '
        >
          <li className='border-b w-full pb-2'>Add New</li>
          <li className='border-b w-full pb-2'>Profile New</li>
          <li className=' w-full'>Logout New</li>
        </ul>
      </button>
    </div>
  );
}

export default UserWidgets;
