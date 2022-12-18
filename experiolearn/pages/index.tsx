import Head from "next/head";
import Image from "next/image";
import Intro from "../components/Intro"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div>
      <Head>
        <title>EXPERIOLEARN</title>
        <meta
          name="description"
          content="Internship Management Platform"
        />
      </Head>
      <Intro />
    </div>
  );
}

export const getStaticProps = () => {
  const services = {};
  return {
    props: { services },
  };
};