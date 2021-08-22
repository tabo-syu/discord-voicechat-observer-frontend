import { Box } from '@chakra-ui/react';
import VoiceChannelsList from './VoiceChannelsList';
import GuildHeader from './GuildHeader';
import { useGuild, useGuildParticipants, useVoiceChannels } from '../utils/swr';
import UsersList from './UsersList';

type Props = {
  guildId: string;
};
const VoiceChannelsNav: React.VFC<Props> = (props) => {
  const guild = useGuild(props.guildId);
  const voiceChannels = useVoiceChannels(props.guildId);
  const participants = useGuildParticipants(props.guildId);

  return (
    <Box>
      <Box paddingX='3' paddingY='3' boxShadow='lg'>
        {guild.isLoading ? <></> : <GuildHeader guild={guild.data} />}
      </Box>
      <Box marginY='5' paddingLeft='3' paddingRight='3'>
        {voiceChannels.isLoading ? (
          <></>
        ) : (
          <VoiceChannelsList voiceChannels={voiceChannels.data} />
        )}
      </Box>
      <Box marginY='5' paddingLeft='3' paddingRight='3'>
        {participants.isLoading ? (
          <></>
        ) : (
          <UsersList users={participants.data} />
        )}
      </Box>
    </Box>
  );
};

export default VoiceChannelsNav;
