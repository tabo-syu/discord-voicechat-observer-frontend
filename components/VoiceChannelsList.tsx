import React from 'react';
import Link from 'next/link';
import { Button, Link as ChakraLink, Stack, Text } from '@chakra-ui/react';
import { MdVolumeUp } from 'react-icons/md';
import { VoiceChannelResponse } from '../utils/types';

type Props = {
  voiceChannels: VoiceChannelResponse[];
};
const VoiceChannelsList: React.VFC<Props> = (props) => {
  return (
    <Stack spacing='0.5'>
      <Text marginBottom='1' fontSize='xs' fontWeight='bold'>
        VOICE CHANNELS
      </Text>
      {props.voiceChannels.map((voiceChannel) => (
        <ChakraLink
          key={voiceChannel.id}
          as={Link}
          href={`/guilds/${voiceChannel.guildId}/${voiceChannel.id}`}
          passHref
        >
          <Button
            as='a'
            justifyContent='flex-start'
            leftIcon={<MdVolumeUp size={21} />}
            variant='ghost'
            isFullWidth={true}
            size='md'
            paddingLeft='1'
          >
            {voiceChannel.name}
          </Button>
        </ChakraLink>
      ))}
    </Stack>
  );
};

export default VoiceChannelsList;
