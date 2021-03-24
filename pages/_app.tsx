import { AppProps } from "next/app";
import "../styles/global.css";
import "../styles/base.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
