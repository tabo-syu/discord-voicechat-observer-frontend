import React from 'react';
import Link from 'next/link';
import { Link as ChakraLink, Avatar, Tooltip } from '@chakra-ui/react';
import { GuildResponse } from '../utils/types';

type Props = {
  guild: GuildResponse;
};

const ToolTipButton = React.forwardRef(function ToolTipButton(
  props: Props,
  ref: React.LegacyRef<HTMLAnchorElement>
) {
  return (
    <Tooltip
      label={props.guild.name}
      aria-label='サーバー名'
      placement='right'
      hasArrow={true}
      offset={[0, 24]}
    >
      <ChakraLink display='block' {...props} ref={ref}>
        <Avatar
          src={props.guild.iconUrl}
          width='full'
          height='auto'
          cursor='pointer'
        />
      </ChakraLink>
    </Tooltip>
  );
});

const GuildIcon: React.VFC<Props> = (props) => {
  return (
    <Link href={`/guilds/${props.guild.id}`} passHref>
      <ToolTipButton guild={props.guild} />
    </Link>
  );
};

export default GuildIcon;
