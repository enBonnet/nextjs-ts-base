import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Titulo</title>
      </Head>
      <section>
        <p className="text-purple-600">
          Hola este es un _boilerplate_ de{" "}
          <a href="https://nextjs.org/learn">Next.js</a>.
        </p>
        <ul>
          <li>jest</li>
          <li>husky</li>
        </ul>
      </section>
    </div>
  );
}
