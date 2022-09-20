import Head from "next/head";
import Image from "next/image";
import Details from "../components/Details/Index";
import Explore from "../components/Explore/Index";
import Hero from "../components/Hero/Index";
import List from "../components/List/Index";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Hero />
      <List />
      <Explore />
      <Details />
    </>
  );
}
