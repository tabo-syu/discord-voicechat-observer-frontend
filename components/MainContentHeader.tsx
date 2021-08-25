import React from 'react';
import { IconType } from 'react-icons';
import { Box, Heading, Icon, HStack } from '@chakra-ui/react';

type Props = {
  icon: IconType;
  text: string;
};
const MainContentHeader: React.VFC<Props> = (props) => {
  return (
    <Box paddingX='3' paddingY='3.5' boxShadow='lg'>
      <HStack alignItems='center'>
        <Icon as={props.icon} boxSize='1.18em' />
        <Heading as='h3' size='sm'>
          {props.text}
        </Heading>
      </HStack>
    </Box>
  );
};

export default MainContentHeader;
