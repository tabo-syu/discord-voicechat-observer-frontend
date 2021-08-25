import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { GuildResponse } from '../utils/types';

type Props = {
  guild: GuildResponse;
};
const GuildHeader: React.VFC<Props> = (props) => {
  return (
    <Box paddingX='3' paddingY='3.5' boxShadow='lg'>
      <Heading as='h2' size='sm'>
        {props.guild.name}
      </Heading>
    </Box>
  );
};

export default GuildHeader;
