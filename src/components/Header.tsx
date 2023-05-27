import Link from 'next/link';

const links: {
  href: string;
  label: string;
}[] = [];

export default function Header() {
  return (
    <header className='flex w-full flex-col items-center p-1' id='header'>
      <p className='self-start text-xs'>
        © {new Date().getFullYear()} three friends
      </p>

      <div className='flex-flex-col w-full text-center 2xl:max-w-2xl'>
        <Link href='/'>
          <h1>three friends</h1>
        </Link>
      </div>

      <nav className='flex flex-col justify-end pb-0.5'>
        <ul className='flex items-center gap-x-4'>
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
