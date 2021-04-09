import Head from "next/head";
import Header from "components/header/header";
import Hero from "components/hero/hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Joimee Cajandab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
    </div>
  );
}
