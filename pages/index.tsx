import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Titurlo</title>
      </Head>
      <section>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section>
        <h2>Blog</h2>
      </section>
    </div>
  );
}
