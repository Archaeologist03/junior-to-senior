import Link from 'next/link';

const index = () => (
  <div>
    <h1>SSR Magician</h1>
    <Link href='/about'>
      <button>About</button>
    </Link>
    {/* <a href='/about'>About</a> */}

    <Link href='/contact'>
      <button style={{ marginLeft: '5px' }}>Contact</button>
    </Link>

    <Link href='/robots'>
      <button style={{ marginLeft: '5px' }}>Robots</button>
    </Link>
  </div>
);

export default index;
