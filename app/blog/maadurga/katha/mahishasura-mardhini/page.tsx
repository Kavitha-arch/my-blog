import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Mahishasura Mardhini</h1>

      <ul>
        <li>
          <Link href="/blog/maadurga/katha/mahishasura-mardhini/verse-1">
            Verse 1
          </Link>
        </li>

        <li>
          <Link href="/blog/maadurga/katha/mahishasura-mardhini/verse-1">
            Verse 2
          </Link>
        </li>
      </ul>
    </div>
  );
}