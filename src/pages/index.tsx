import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

export default function Home() {
  return (
    <Root>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="My next.js app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Root>
  );
}

const Root = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: lightcoral;
`;
