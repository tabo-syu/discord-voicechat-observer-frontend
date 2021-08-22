import React from 'react';
import { Heading } from '@chakra-ui/react';
import { GuildResponse } from '../utils/types';

type Props = {
  guild: GuildResponse;
};
const GuildHeader: React.VFC<Props> = (props) => {
  return (
    <Heading as='h2' size='sm' paddingBottom='1'>
      {props.guild.name}
    </Heading>
  );
};

export default GuildHeader;
