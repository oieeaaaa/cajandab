import Head from "next/head";
import Hello from "components/hello/hello";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Joimee Cajandab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hello />
    </div>
  );
}
