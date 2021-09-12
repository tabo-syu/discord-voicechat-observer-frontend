import { useRouter } from 'next/router';
import Layout from '../../../../../layouts/DefaultLayout';
import GuildLayout from '../../../../../layouts/GuildLayout';
import VoiceChannelLayout from '../../../../../layouts/VoiceChannelLayout';
import SessionsTable from '../../../../../components/SessionsTable';
import { ReactElement } from 'react';

import { useVoiceChannelSessions } from '../../../../../utils/swr';

const Page = () => {
  const router = useRouter();
  const guildId = router.query.guildId;
  const voiceChannelId = router.query.voiceChannelId;
  const sessions = useVoiceChannelSessions(voiceChannelId as string);

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
