import Head from "next/head";
import Link from "next/link";
import Hero from "../comps/Hero";

import { useRouter } from "next/router";
import Slider from "../comps/Slider";

const index = () => {
  return (
    <div>
      <Head>
        <title>Next Web</title>
        <meta name="description" content="next web tutor" />
      </Head>
      <Hero />
      <Slider />
    </div>
  );
};

export default index;
