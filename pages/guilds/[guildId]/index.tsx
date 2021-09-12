import { useRouter } from 'next/router';
import Layout from '../../../components/layouts/DefaultLayout';
import GuildLayout from '../../../components/layouts/GuildLayout';
import { ReactElement } from 'react';

const Page = () => {
  return <></>;
};

Page.getLayout = function GetLayout(page: ReactElement) {
  const router = useRouter();
  const guildId = router.query.guildId;

  return (
    <Layout>
      <GuildLayout guildId={guildId as string}>{page}</GuildLayout>
    </Layout>
  );
};

export default Page;
