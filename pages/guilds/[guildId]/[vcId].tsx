import { Box, Flex } from '@chakra-ui/react';
import { MdVolumeUp } from 'react-icons/md';
import { useRouter } from 'next/router';
import GuildHeader from '../../../components/GuildHeader';
import MainContentHeader from '../../../components/MainContentHeader';
import VoiceChannelsList from '../../../components/VoiceChannelsList';
import UsersList from '../../../components/UsersList';
import SessionsTable from '../../../components/SessionsTable';
import SideNav from '../../../components/SideNav';

import {
  useGuild,
  useVoiceChannels,
  useVoiceChannel,
  useVoiceChannelSessions,
  useGuildParticipants,
} from '../../../utils/swr';

const Guilds = () => {
  const router = useRouter();
  const guildId = router.query.guildId;
  const voiceChannelId = router.query.vcId;
  const guild = useGuild(guildId as string);
  const voiceChannels = useVoiceChannels(guildId as string);
  const voiceChannel = useVoiceChannel(voiceChannelId as string);
  const sessions = useVoiceChannelSessions(voiceChannelId as string);
  const participants = useGuildParticipants(guildId as string);

  return (
    <>
      <Flex height='100%'>
        <Box flexShrink={0}>
          <SideNav>
            <GuildHeader guild={guild.data} isLoading={guild.isLoading} />
            <Box marginY='5' paddingLeft='3' paddingRight='3'>
              <VoiceChannelsList
                voiceChannels={voiceChannels.data}
                isLoading={voiceChannels.isLoading}
              />
            </Box>
            <Box marginY='5' paddingLeft='3' paddingRight='3'>
              <UsersList
                users={participants.data}
                isLoading={participants.isLoading}
              />
            </Box>
          </SideNav>
        </Box>
        <Box flexGrow={1}>
          <MainContentHeader
            icon={MdVolumeUp}
            isLoading={voiceChannel.isLoading}
          >
            {voiceChannel.data?.name ?? ''}
          </MainContentHeader>
          <Box padding='3'>
            <SessionsTable
              sessions={sessions.data}
              isLoading={sessions.isLoading}
            />
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Guilds;
