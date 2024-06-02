import "./globals.css";
import Link from "next/link";

export default function Home() {
  return (
    <main >
      <div >
        <Link href="/categories/subcategory-1">Subcategory 1</Link>
        <br />
        <Link href="/categories/subcategory-2">Subcategory 2</Link>
        <br />
        <br />
        <hr />
        <br />
        <Link href="/categories/subcategory-1?state=MN">Subcategory 1 with state in query string</Link>
        <br />
        <Link href="/categories/subcategory-2?state=VA">Subcategory 2 with state in query string</Link>
      </div>
    </main>
  );
}
