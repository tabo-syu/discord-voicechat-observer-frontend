import { useRouter } from 'next/router';
import Layout from '../../../../../components/layouts/DefaultLayout';
import GuildLayout from '../../../../../components/layouts/GuildLayout';
import VoiceChannelLayout from '../../../../../components/layouts/VoiceChannelLayout';
import UserActiveChart from '../../../../../components/UserActiveChart';
import { utcToSecond, utcToTokyo } from '../../../../../utils/date';
import { useSession, useSessionSessionLogs } from '../../../../../utils/swr';
import { ReactElement } from 'react';

const Page = () => {
  const router = useRouter();
  const sessionId = router.query.sessionId;
  const session = useSession(sessionId as string);
  const sessionLogs = useSessionSessionLogs(sessionId as string);

  if (!sessionId) {
    return <></>;
  }

  if (session.isLoading || sessionLogs.isLoading) {
    return <></>;
  }

  const title = `${utcToTokyo(session.data.startedAt)} ~ ${utcToTokyo(
    session.data.endedAt
  )}`;
  const sessionUsers = sessionLogs.data.map((log) => ({
    id: log[0].userId,
    username: log[0].username,
  }));
  const data = sessionLogs.data.flat().map((log) => ({
    x: utcToSecond(log.createdAt),
    x2: utcToSecond(log.leftAt),
    y: sessionUsers.findIndex((user) => user.id === log.userId),
  }));

  return (
    <UserActiveChart
      title={title}
      users={sessionUsers.map((user) => user.username)}
      data={data}
    />
  );
};

Page.getLayout = function GetLayout(page: ReactElement) {
  const router = useRouter();
  const guildId = router.query.guildId;
  const voiceChannelId = router.query.voiceChannelId;

  return (
    <Layout>
      <GuildLayout guildId={guildId as string}>
        <VoiceChannelLayout voiceChannelId={voiceChannelId as string}>
          {page}
        </VoiceChannelLayout>
      </GuildLayout>
    </Layout>
  );
};

export default Page;
