import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../../../../layouts/DefaultLayout';
import GuildLayout from '../../../../../layouts/GuildLayout';
import UserLayout from '../../../../../layouts/UserLayout';
import SessionsTable from '../../../../../components/SessionsTable';
import { useGuildParticipantSessions } from '../../../../../utils/swr';

const Page = () => {
  const router = useRouter();
  const guildId = router.query.guildId;
  const userId = router.query.userId;
  const sessions = useGuildParticipantSessions(
    guildId as string,
    userId as string
  );

  return (
    <SessionsTable
      guildId={guildId as string}
      sessions={sessions.data}
      isLoading={sessions.isLoading}
    />
  );
};

Page.getLayout = function GetLayout(page: ReactElement) {
  const router = useRouter();
  const guildId = router.query.guildId as string;
  const userId = router.query.userId as string;

  return (
    <Layout>
      <GuildLayout guildId={guildId as string}>
        <UserLayout userId={userId}>{page}</UserLayout>
      </GuildLayout>
    </Layout>
  );
};

export default Page;
