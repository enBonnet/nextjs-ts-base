import Link from "next/link";

export default function Error() {
  return (
    <>
      <h1>Error Page</h1>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </>
  );
}
