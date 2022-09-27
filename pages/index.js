import Head from "next/head";
import Explore from "../components/Explore/Index";
import Hero from "../components/Hero/Index";
import Loan from "../components/Homeloan/Index";
import List2 from "../components/List-2/Index";
import List from "../components/List/Index";
import ReadMore from "../components/Readmore/Index";
import Popular from "../components/Popular/Index";

export default function Home() {
  return (
    <>
      <Hero />
      <List />
      <Explore />
      <ReadMore />
      <List2 />
      <Loan />
      <Popular />
    </>
  );
}
