import Link from "next/link";
import Head from "next/head";

export default function Error() {
  return (
    <div className="flex items-center justify-center h-screen background">
      <Head>
        <title>Error Page</title>
      </Head>
      <section className="p-8 rounded bg-yellow-50 mx-4">
        <h1 className="text-center mb-8">
          <span className="block text-5xl font-bold leading-none">
            Error Page
          </span>
        </h1>
        <div className="text-center">
          <Link href="/">
            <a className="focus:outline-none text-white text-sm py-2.5 px-5 border-b-4 border-blue-600 rounded-md bg-blue-500 hover:bg-blue-400">
              Go back home
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
