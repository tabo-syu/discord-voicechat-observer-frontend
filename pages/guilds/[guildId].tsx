import { Box, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import VoiceChannelsNav from '../../components/VoiceChannelsNav';

const Guilds = () => {
  const router = useRouter();
  const guildId = router.query.guildId;

  return (
    <Flex height='100%'>
      <Box width='60' backgroundColor='gray.700'>
        <VoiceChannelsNav guildId={guildId as string} />
      </Box>
      <Box></Box>
    </Flex>
  );
};

export default Guilds;
