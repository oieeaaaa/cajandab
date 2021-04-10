import Head from "next/head";
import Header from "components/header/header";
import Hero from "components/hero/hero";
import Works from "components/works/works";
import About from "components/about/about";

// data

import { nav } from "data/routes.json";
import { works } from "data/works.json";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Joimee Cajandab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header nav={nav} />
      <Hero />
      <Works works={works} />
      <About />
    </div>
  );
}
