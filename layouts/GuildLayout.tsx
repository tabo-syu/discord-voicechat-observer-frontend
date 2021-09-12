import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import GuildHeader from '../components/GuildHeader';
import VoiceChannelsList from '../components/VoiceChannelsList';
import UsersList from '../components/UsersList';
import SideNav from '../components/SideNav';
import { useGuild, useVoiceChannels, useGuildParticipants } from '../utils/swr';

type Props = {
  guildId: string;
  children: React.ReactNode;
};
const Layout: React.VFC<Props> = (props) => {
  const guild = useGuild(props.guildId);
  const voiceChannels = useVoiceChannels(props.guildId);
  const participants = useGuildParticipants(props.guildId);

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
              guildId={props.guildId}
              users={participants.data}
              isLoading={participants.isLoading}
            />
          </Box>
        </SideNav>
      </Box>
      <Box flexGrow={1}>{props.children}</Box>
    </Flex>
  );
};

export default Layout;
