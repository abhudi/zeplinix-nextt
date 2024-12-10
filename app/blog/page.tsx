import Link from "next/link";

export default function Blog() {
  return (
    <main>
      <h1>Our Blog</h1>
      <p>Read the latest insights and updates from our team.</p>
      <Link href="/service">Read My First Post</Link>
    </main>
  );
}
