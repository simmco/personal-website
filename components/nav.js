import Link from 'next/link';

const links = [
  { href: '/getintouch', label: 'Get in touch' },
  { href: '/projects', label: 'Projects' },
];

export default function Nav() {
  return (
    <header>
      <nav>
        <ul className="flex items-center py-8 text-gray-700 flex">
          <img src="/small_me.png" className="rounded-full w-12 h-12 mr-4" />
          <Link href="/">
            <li>
              <a className="text-xl no-underline text-teal-500 inline-block">Michael Simmelbauer</a>
            </li>
          </Link>
          {/* <ul className="flex justify-between items-center space-x-4">
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul> */}
        </ul>
      </nav>
    </header>
  );
}
