import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Next JS pre-rendering</h1>
      <div>
        <Link href="/users">Users</Link>
      </div>
      <div>
        <Link href="/posts">Posts</Link>
      </div>
    </>
  );
}
