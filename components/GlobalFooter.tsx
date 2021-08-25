import { Box, Icon, Text, HStack, Link } from '@chakra-ui/react';
import { AiOutlineGithub } from 'react-icons/ai';
import React from 'react';

const GlobalFooter: React.VFC = () => {
  return (
    <footer>
      <Box paddingY='1' paddingX='2'>
        <HStack justifyContent='flex-end'>
          <Text color='gray.400' fontSize='small'>
            Discord VoiceChat Statistics
          </Text>
          <Link
            href='https://github.com/tabo-syu/discord-voicechat-observer-frontend'
            isExternal={true}
            lineHeight='16px'
          >
            <Icon as={AiOutlineGithub} color='gray.400' />
          </Link>
        </HStack>
      </Box>
    </footer>
  );
};

export default GlobalFooter;
