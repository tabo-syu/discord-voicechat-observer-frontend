import React from 'react';
import { Box } from '@chakra-ui/react';
import MainContentHeader from '../../components/MainContentHeader';
import { MdVolumeUp } from 'react-icons/md';
import { useVoiceChannel } from '../../utils/swr';

type Props = {
  voiceChannelId: string;
  children: React.ReactNode;
};
const Layout: React.VFC<Props> = (props) => {
  const voiceChannel = useVoiceChannel(props.voiceChannelId);

  return (
    <>
      <MainContentHeader icon={MdVolumeUp} isLoading={voiceChannel.isLoading}>
        {voiceChannel.data?.name ?? ''}
      </MainContentHeader>
      <Box padding='3'>{props.children}</Box>
    </>
  );
};

export default Layout;
