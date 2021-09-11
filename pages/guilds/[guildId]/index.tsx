import { Box, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import GuildHeader from '../../../components/GuildHeader';
import VoiceChannelsList from '../../../components/VoiceChannelsList';
import UsersList from '../../../components/UsersList';
import SideNav from '../../../components/SideNav';

import {
  useGuild,
  useVoiceChannels,
  useGuildParticipants,
} from '../../../utils/swr';

const Guilds = () => {
  const router = useRouter();
  const guildId = router.query.guildId;
  const guild = useGuild(guildId as string);
  const voiceChannels = useVoiceChannels(guildId as string);
  const participants = useGuildParticipants(guildId as string);

  return (
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
    </Flex>
  );
};

export default Guilds;
