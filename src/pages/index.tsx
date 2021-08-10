import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <Root>
      <Head>
        <title>my_accelerist</title>
        <meta
          name="description"
          content="My next.js app, initial-scale=1.0, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      poqpoq
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
  background: #718d71;
`;
