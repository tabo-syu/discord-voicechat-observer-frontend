import { Box, Flex } from '@chakra-ui/react';
import { MdVolumeUp } from 'react-icons/md';
import { useRouter } from 'next/router';
import VoiceChannelsNav from '../../../components/VoiceChannelsNav';
import MainContentHeader from '../../../components/MainContentHeader';
import SessionsTable from '../../../components/SessionsTable';
import {
  useSessionUsers,
  useVoiceChannel,
  useVoiceChannelSessions,
} from '../../../utils/swr';

const Guilds = () => {
  const router = useRouter();
  const guildId = router.query.guildId;
  const voiceChannelId = router.query.vcId;
  const voiceChannel = useVoiceChannel(voiceChannelId as string);
  const sessions = useVoiceChannelSessions(voiceChannelId as string);

  return (
    <>
      <Flex height='100%'>
        <Box width='60' backgroundColor='gray.700' flexShrink={0}>
          <VoiceChannelsNav guildId={guildId as string} />
        </Box>
        <Box flexGrow={1}>
          {voiceChannel.isLoading ? (
            <></>
          ) : (
            <MainContentHeader
              icon={MdVolumeUp}
              text={voiceChannel.data.name}
            />
          )}
          {sessions.isLoading ? (
            <></>
          ) : (
            <Box padding='3'>
              <SessionsTable sessions={sessions.data} />
            </Box>
          )}
        </Box>
      </Flex>
    </>
  );
};

export default Guilds;
