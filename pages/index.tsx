import Head from "next/head";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen background">
      <Head>
        <title>Awesome Nextjs Example</title>
      </Head>
      <section className="p-8 rounded bg-yellow-50 mx-4">
        <h1 className="text-center mb-8">
          <span className="block text-xl text-gray-600 leading-tight">
            Welcome to this
          </span>
          <span className="block text-5xl font-bold leading-none">
            Awesome Nextjs Example
          </span>
        </h1>
        <div>
          <p className="my-2">How to use this example:</p>
          <div className="bg-gray-500 p-2 rounded text-white">
            <code>
              npx create-next-app custom-name --example
              https://github.com/enBonnet/nextjs-ts-base
            </code>
          </div>
        </div>
        <div>
          <p className="my-2">Already includes:</p>
          <ul>
            <li>
              <a href="https://www.typescriptlang.org/">typescript</a>
            </li>
            <li>
              <a href="https://tailwindcss.com/">tailwindcss</a>
            </li>
            <li>
              <a href="https://postcss.org/">postcss</a>
            </li>
            <li>
              <a href="https://eslint.org/">eslint</a>
            </li>
            <li>
              <a href="https://prettier.io/">prettier</a>
            </li>
            <li>
              <a href="https://jestjs.io/">jest</a>
            </li>
            <li>
              <a href="https://typicode.github.io/husky/#/">husky</a>
            </li>
            <li>
              <a href="https://github.com/okonet/lint-staged">lint-staged</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
