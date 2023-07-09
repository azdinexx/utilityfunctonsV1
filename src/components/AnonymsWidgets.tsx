import Link from 'next/link';

function AnonymsWidgets() {
  return (
    <div>
      <div className='px-2 ml-auto flex '>
        <button className='px-2'>
          <Link href='login'>Login</Link>
        </button>
      </div>
    </div>
  );
}

export default AnonymsWidgets;
