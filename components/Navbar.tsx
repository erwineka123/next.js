import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-xl font-bold">
          <Link href="/">My Portfolio</Link>
        </div>
        <div className="space-x-4">
          <Link href="/profile">Profile</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
