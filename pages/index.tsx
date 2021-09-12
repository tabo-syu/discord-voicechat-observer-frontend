import Layout from '../layouts/DefaultLayout';
import { ReactElement } from 'react';
import Head from 'next/head';

const Page = () => {
  return (
    <>
      <Head>
        <title>Discord VoiceChat Statistics</title>
        <meta name='description' content='Discord VoiceChat Statistics' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
