import Head from "next/head";
import Image from "next/image";
import Details from "../components/Details/Index";
import Explore from "../components/Explore/Index";
import Hero from "../components/Hero/Index";
import Loan from "../components/Homeloan/Index";
import List2 from "../components/List-2/Index";
import List from "../components/List/Index";
import Association from "../components/Association/Index";
import ReadMore from "../components/Readmore/Index";
import Popular from "../components/Popular/Index";
import styles from "../styles/Home.module.css";
import EBook from "../components/EBook/Index";
import Footer from "../components/Footer/Index";

export default function Home() {
  return (
    <>
      <Hero />
      <List />
      <Explore />
      <Details />
      <ReadMore />
      <List2 />
      <Loan />
      <Association />
      <Popular />
      <EBook />
      <Footer />
    </>
  );
}
